var readability = require('readability-meter');
var syllable = require('syllable');
var wc = require('word-count');
var lc = require('letter-count');
var automatedReadability = require('automated-readability');
var colemanLiau = require('coleman-liau')
var fs = require('fs');

var generatePage = function(){
	var text = "";
	//OPTION 1: Read a single file in the directory
	text = fs.readFileSync('PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md', 'utf8');
	
	//OPTION 2: Read in all the files in the directory
	var files = [];
	fs.readdirSync('./').forEach(file => {
		if (file.indexOf('.md') != -1){
			files.push(file);
		}
	});
	for (var count = 0; count < files.length; count++){
		text += fs.readFileSync(files[count], 'utf8')+"\n";
	}
	
	//Removing HTML tags
	while (text.indexOf('<') != -1){ //Tag reference can be found
		var index = text.indexOf('<');
		var nextClosingIndex = text.indexOf('>', index+1);
		text = text.slice(0,index) + text.slice(nextClosingIndex+1,);
	}
	
	//Removing special Markdown characters
	text = text.replace(/#/g,'');
	text = text.replace(/\*/g,'');
	text = text.replace(/\//g,'');
	text = text.replace(/_/g,'');
	
	/*
	//Removing lists completely (works for nested)
	while (text.indexOf('<ul type="*">') != -1){ //List reference can be found
		var index = text.indexOf('<ul type="*">');
		var nextOpeningIndex = text.indexOf('<ul type="*">', index+1);
		var nextClosingIndex = text.indexOf('</ul>', index+1);
		while (nextOpeningIndex < nextClosingIndex && nextOpeningIndex != -1){
			nextOpeningIndex = text.indexOf('<ul type="*">', nextOpeningIndex+1);
			nextClosingIndex = text.indexOf('</ul>', nextClosingIndex+1);
		}
		text = text.slice(0,index) + text.slice(nextClosingIndex+5,);
	}
	*/
	
	var sentences = Math.round(wc(text)/(206.835-readability.ease(text).score-84.6*(syllable(text)/wc(text)))/1.015);
	
	var html = 
		'<head>\n'+
			'<meta charset="utf-8"/>\n'+
		'</head>\n'+
		'<body>\n'+
		'<h3 style="padding: 5;">Basic Information</h3>\n'+
		'<table cellpadding="5">\n'+
			'<tr>\n'+
				'<td>No. of Lines:</td>\n'+
				'<td>'+lc.count(text).lines+'</td>\n'+
			'</tr>\n'+
			'<tr>\n'+
				'<td>No. of Sentences:</td>\n'+
				'<td>'+sentences+'</td>\n'+
			'</tr>\n'+
		'<tr>\n'+
			'<td>No. of Words:</td>\n'+
			'<td>'+wc(text)+'</td>\n'+
		'</tr>\n'+
		'<tr>\n'+
			'<td>No. of Syllables:</td>\n'+
			'<td>'+syllable(text)+'</td>\n'+
		'</tr>\n'+
		'<tr>\n'+
			'<td>No. of Letters:</td>\n'+
			'<td>'+lc.count(text).letters+'</td>\n'+
		'</tr>\n'+
		'<tr>\n'+
			'<td>No. of Characters:</td>\n'+
			'<td>'+lc.count(text).chars+'</td>\n'+
		'</tr>\n'+
		'<tr>\n'+
			'<td>No. of Figures:</td>\n'+
			'<td>'+lc.count(text).numbers+'</td>\n'+
		'</tr>\n'+
		'<tr>\n'+
			'<td>No. of Symbols:</td>\n'+
			'<td>'+lc.count(text).wordsigns+'</td>\n'+
		'</tr>\n'+
	'</table>\n'+
	'<h3 style="padding: 5;">Flesch–Kincaid Readability Tests</h3>\n'+
	'<table cellpadding="5">\n'+
		'<tr>\n'+
			'<td>Readability Score:</td>\n'+
			'<td>'+readability.ease(text).score.toFixed(4)+'</td>\n'+
		'</tr>\n'+
		'<tr>\n'+
			'<td>School Level:</td>\n'+
			'<td>'+readability.ease(text).schoolLevel+'</td>\n'+
		'</tr>\n'+
		'<tr>\n'+
			'<td>Remarks:</td>\n'+
			'<td>'+readability.ease(text).notes+'</td>\n'+
		'</tr>\n'+
	'</table>\n'+
	'<h3 style="padding: 5;">Other Readability Indicators</h3>\n'+
	'<table cellpadding="5">\n'+
		'<tr>\n'+
			'<td>Automated Readability Index:</td>\n'+
			'<td>'+automatedReadability({sentence: sentences, word: wc(text), character: lc.count(text).letters+lc.count(text).numbers}).toFixed(4).toString()+'</td>\n'+
		'</tr>\n'+
		'<tr>\n'+
			'<td>Coleman–Liau Index:</td>\n'+
			'<td>'+colemanLiau({sentence: sentences, word: wc(text), letter: lc.count(text).letters+lc.count(text).numbers}).toFixed(4).toString()+'</td>\n'+
		'</tr>\n'+
	'</table>\n'+
	'</body>';
	
	fs.writeFileSync('./report.html',html);
}

generatePage();