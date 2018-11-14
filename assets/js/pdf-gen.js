var fs = require('fs')
var pdf = require('html-pdf')
var sitePath = __dirname + '/../..'
var html = fs.readFileSync(sitePath + '/export.html', 'utf8');
var options = {
    height: '594mm',        // allowed units: mm, cm, in, px
    width: '420mm',
    base: 'file://' + sitePath + '/',
    border: {
        right: '60px', // default is 0, units: mm, cm, in, px
        left: '60px',
    },
    header: {
        height: '80px',
    },
    footer: {
        height: '80px',
    },
};

console.log('Creating pdf.....')
console.log('base: ', options.base)

pdf.create(html, options).toFile('./_site/export.pdf', function (err, res) {
    if (err) return console.log(err)
    console.log('Pdf created at: ', res)
})