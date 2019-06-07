#!/bin/bash

echo 'Started script to generate PDFs'
echo 'Installing node dependencies'
npm i glob jsdom js-yaml
node _site/assets/startup/pdf-gen.js
echo 'End script'
