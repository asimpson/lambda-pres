# Tools + Frameworks


## Serverless
👉 https://serverless.com


Serverless works with AWS + OpenWhisk.


## Apex
👉 http://apex.run


Only works with AWS Lambda. Awesome automation around deploying languages that aren't officially supported (e.g. Go, Rust).


## Claudia.js
👉 https://github.com/claudiajs/claudia


Only works with AWS Lambda. You can setup API Gateway from the CLI.


## My tools
I've made these as I've explored and built stuff on Lambda.


### deployless
👉 asimpson/deployless


Thin wrapper around `aws-sdk` that makes deploying from the CLI easier.

`$ deployless create bucket=test name=foo`


### eleven-check
👉 asimpson/eleven-check


Test lambda functions locally from the CLI.

`$ eleven-check foo.js eventParam=hi`


### npm-pkg
👉 asimpson/npm-pkg


`npm install` *inside* a Lambda to generate the correct package bindings.


There's also an HTTP endpoint for this lambda that returns a URL to the tarball of your package: `https://ybtuwnhhtg.execute-api.us-east-1.amazonaws.com/prod/PACKAGE_NAME`
