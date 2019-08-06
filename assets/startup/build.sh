---
---
#!/bin/bash

echo 'Started script to generate PDFs'
echo 'Installing node dependencies'
npm i glob jsdom js-yaml p-all
if [ "{{ site.offline }}" == "true" ]; then
    node _site/assets/startup/prebuild-lunr-index.js
    echo 'Generating lunr index complete'
    npm i html-pdf
else
    if [ "${AWS_BRANCH}" = "master" ]; then
      echo "Building prod elasticsearch index for $APP_NAME";
      aws lambda invoke --function-name es-lambda-prod-es --invocation-type Event \
        --payload "{\"index\":\"opendocsg-$APP_NAME\", \"repoName\":\"$APP_NAME\"}" /dev/null;
    fi

    if [ "${AWS_BRANCH}" = "staging" ]; then
      echo "Building staging elasticsearch index for $APP_NAME";
      aws lambda invoke --function-name es-lambda-staging-es --invocation-type Event \
        --payload "{\"index\":\"opendocsg-$APP_NAME\", \"repoName\":\"$APP_NAME\", \"branch\": \"staging\"}" /dev/null;
    fi

    if [ "${AWS_BRANCH}" = "${CUSTOM_BRANCH}" ]; then
      echo "Building $CUSTOM_BRANCH into staging elasticsearch index for $APP_NAME";
      aws lambda invoke --function-name es-lambda-staging-es --invocation-type Event \
        --payload "{\"index\":\"opendocsg-$APP_NAME\", \"repoName\":\"$APP_NAME\", \"branch\": \"$CUSTOM_BRANCH\"}" /dev/null;
    fi
fi
node _site/assets/startup/pdf-gen.js
echo 'End script'
