# Teach Lambda HTTP


## API Gateway 🌐

API Gateway is an API as a service that can register an endpoint with a Lambda function.


## 📺 ytrss

`ytrss.co` is a website I built in 2015 that provides RSS feeds for Youtube channels.


I've since ported `ytrss.co` to running exclusively via API Gateway + Lambdas.

![](/images/ytrss-api.png)


## Good 'ol HTML
API Gateway defaults to returning JSON from it's endpoints, but it can also return HTML, XML, or other formats.


Home page
```javascript
exports.handler = (event, context, callback) => {
    const template = `
    <!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <title>youtube-rss</title>
    <meta name="description" content="Generate a RSS feed for any Youtube channel">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="https://djlmqis25ftal.cloudfront.net/css/manifest.css" rel="stylesheet">
  <body>
    <div id="app">
    <div class="wrapper" data-reactid=".1ew6juojny8" data-react-checksum="-1252895381"><form action="/parseFeed" class="form-wrapper" data-reactid=".1ew6juojny8.1"><label class="channel-submit" data-reactid=".1ew6juojny8.1.0
">Enter a Youtube channel name or ID</label><div class="side-by-side--wrapper" data-reactid=".1ew6juojny8.1.1"
><input type="text" class="channel-input side-by-side side-by-side--major" name="search" required placeholder=
"LastWeekTonight" data-reactid=".1ew6juojny8.1.1.0"><span class="side-by-side side-by-side--minor" data-reacti
d=".1ew6juojny8.1.1.1"><input type="submit" class="channel-submit" value="Go!" data-reactid=".1ew6juojny8.1.1.
1.0"></span></div></form><div class="example" data-reactid=".1ew6juojny8.2"><h1 data-reactid=".1ew6juojny8.2.0
">Instructions:</h1><p data-reactid=".1ew6juojny8.2.1">Copy the channel name or ID out of the URL</p><img src=
"https://djlmqis25ftal.cloudfront.net/img/username-or-id.jpg" class="example-img" alt="Image of youtube URL with ID and username highlighte
d" data-reactid=".1ew6juojny8.2.2"></div></div>
<footer data-reactid=".20rdk6zj5z4" data-react-checksum="1259628843"><p data-reactid=".20rdk6zj5z4.0">Made with <span class='red'>&#x2764;</span> by <a href='http://twitter.com/a_simpson'>@a_simpson</a>. Created with <a href='http://facebook.github.io/react/'>React
</a></p></footer>

    </div>
  </body>
</html>
    `;
    callback(null, template);
};
```


## Demo

✨ https://github.com/asimpson/lam-emoji-demo


Lambda
```javascript
'use strict'

const fetch = require('isomorphic-fetch');

const emoji = (event, context, cb) => {
  fetch('http://emoji.getdango.com/api/emoji?q=${event.emoji}').then((x) => {
    return x.json();
  }).then((resp) => {
    const emojiResponse = resp.results[0].text;
    cb(null, JSON.stringify(emojiResponse));
  });
};

exports.handler = emoji;
```


API Gateway Swagger JSON
```json
{
  "swagger": "2.0",
  "info": {
    "version": "2017-02-15T15:29:49Z",
    "title": "emoji-demo"
  },
  "host": "ld3uf7y63f.execute-api.us-east-1.amazonaws.com",
  "basePath": "/prod",
  "schemes": [
    "https"
  ],
  "paths": {
    "/{emoji}": {
      "get": {
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "emoji",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "schema": {
              "$ref": "#/definitions/Empty"
            }
          }
        }
      },
      "options": {
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "schema": {
              "$ref": "#/definitions/Empty"
            },
            "headers": {
              "Access-Control-Allow-Origin": {
                "type": "string"
              },
              "Access-Control-Allow-Methods": {
                "type": "string"
              },
              "Access-Control-Allow-Headers": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Empty": {
      "type": "object",
      "title": "Empty Schema"
    }
  }
}
```


Use it

`curl https://ld3uf7y63f.execute-api.us-east-1.amazonaws.com/prod/coffee` => ☕
