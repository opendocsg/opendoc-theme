var fs = require('fs')
var pdf = require('html-pdf')
var sitePath = __dirname + '/../../_site'
var html = fs.readFileSync(sitePath + '/export.html', 'utf8');
var options = {
    format: 'A4',
    base: 'file://' + sitePath + '/',
    border: {
        top: '20px',            // default is 0, units: mm, cm, in, px
        right: '10px',
        bottom: '20px',
        left: '10px'
    },
    zoomFactor: '0.5',
};

console.log('Creating pdf.....')
console.log('base: ', options.base)

pdf.create(html, options).toFile('./_site/export.pdf', function (err, res) {
    if (err) return console.log(err)
    console.log('Pdf created at: ', res)
})