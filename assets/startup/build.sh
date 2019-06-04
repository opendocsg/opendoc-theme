#!/bin/bash

echo 'Generating PDFs'
echo 'Installing node dependencies'
npm i html-pdf glob jsdom js-yaml
node _site/assets/startup/pdf-gen.js
echo 'Generating PDFs Complete'
node _site/assets/startup/prebuild-lunr-index.js
echo 'Generating Lunr Index Complete'
