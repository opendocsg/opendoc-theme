---
title: Readability Scores
---

# Readability Scores

For every OpenDoc, our system generates a report with several indicators on the document's ease of readability. 
These indicators are explained in detail here.

## Explanation of Indicators
**Flesch-Kincaid Readability Tests**

This is a widely recognised algorithm that generates a readability score typically between 0 to 100. 
The higher the score, the more easily readable the text is. The algorithm uses the total number of sentences, 
words and syllables in its calculation.

The readability scores can be interpreted as follows:

<table>
	<tr>
		<th>Score</th>
		<th>School Level</th>
		<th>Remarks</th>
	</tr>
	<tr>
		<td>90.0-100.0</td>
		<td>5th grade</td>
		<td>Very easy to read. Easily understood by an average 11-year-old student.</td>
	</tr>
	<tr>
		<td>80.0–90.0</td>
		<td>6th grade</td>
		<td>Easy to read. Conversational English for consumers.</td>
	</tr>
	<tr>
		<td>70.0–80.0</td>
		<td>7th grade</td>
		<td>Fairly easy to read.</td>
	</tr>
	<tr>
		<td>60.0–70.0</td>
		<td>8th &amp; 9th grade</td>
		<td>Plain English. Easily understood by 13- to 15-year-old students.</td>
	</tr>
	<tr>
		<td>60.0–50.0</td>
		<td>10th to 12th grade</td>
		<td>Fairly difficult to read.</td>
	</tr>
	<tr>
		<td>30.0–50.0</td>
		<td>College</td>
		<td>Difficult to read.</td>
	</tr>
	<tr>
		<td>0.0–30.0</td>
		<td>College graduate</td>
		<td>Very difficult to read. Best understood by university graduates.</td>
	</tr>
</table>

**Automated Readability Index**

Developed in the 1960s by the United States Air Force, this index is an approximate representation of the 
grade level needed to comprehend the text. The algorithm uses the total number of sentences, 
words and characters in its calculation.

**Coleman-Liau Index**

The Coleman-Liau Index is a commonly used readability formula that was developed in 1975. It
approximates the grade level needed to understand the contents. The algorithm uses the average number
of letters and sentences per 100 words in its calculation.

**Note of Caution**

All three indicators use different formulae for calculating the readability of the text. There is no one 
"correct" approach to use. However, the Flesch-Kincaid Readability Score is generally the most recognized
indicator and even has a place in the laws of several nations.

## Sample Texts

**Sample Text 1**

"The country’s infrastructure as well as government digital services are often recognised for its technological 
readiness. As Singapore continues to leverage on new technologies to digitally transform government digital 
services, there are lessons to share and much to learn from other countries that have developed new ways of 
improving the online experience for citizens. We share some of the notable awards and significant milestones 
that Singapore has garnered over the years." _(Source: GovTech website)_

- Flesch–Kincaid Readability Score: 26.0200
- Automated Readability Index: 16.9983
- Coleman–Liau Index: 15.9600

![Very Difficult to Read!](./images/very-difficult-to-read.png)

**Sample Text 2**

"Therefore, housing, education and healthcare are three areas that the Government is very focused on. We will 
spare no effort to ensure you can afford them. I have often spoken about education at National Day Rallies, and 
last year I spoke quite a bit about preschool education. This year, I will talk about healthcare and housing, 
starting with healthcare." _(Source: National Day Rally 2018)_

- Flesch–Kincaid Readability Score: 56.7913
- Automated Readability Index: 11.4744
- Coleman–Liau Index: 11.4969

![OK to Read!](./images/ok-to-read.png)