# What is it?

```javascript
exports.handler = (event, context, callback) => {
    callback(null, '👋 🌏');
};
```
<!-- .element: class="fragment" -->


## Function as a service
It's the smallest possible unit of infrastructure: A single function.
<!-- .element: class="fragment" -->

- You only pay for the resources/time that the function uses when it runs.
<!-- .element: class="fragment" -->

- No maintenance or management
<!-- .element: class="fragment" -->


## Environment


### Language

🙌🙌🙌🙌🙌🙌
**Node**
🙌🙌🙌🙌🙌🙌

(and Python, and Java, and C#)
<!-- .element: style="font-size: 10px;"-->


###  Anatomy of a Lambda function

`(event, context, callback)`
<!-- .element: class="fragment" -->

- `event` is an object which will contain information about a trigger or event. This is the user-configurable input to the function.
<!-- .element: class="fragment" -->

- `context` provides...*context* about why or how the lambda was triggered (e.g. how much time is remaining).
<!-- .element: class="fragment" -->

- `callback` is a function `(err, data)`. Its how you signal that the lambda should end.
<!-- .element: class="fragment" -->


### Amazon Linux

- Node v4.x
<!-- .element: class="fragment" -->

- Typical built-in shell programs e.g. `rm`, `tar`, `sqlite3`
<!-- .element: class="fragment" -->

- Also, `aws-sdk` is included for you automatically along with `convert` (✨ImageMagick)
<!-- .element: class="fragment" -->


### Gotchas

- `/tmp` is the only user-writeable directory
<!-- .element: class="fragment" -->

- `'use strict'` for ES6 because Node4
<!-- .element: class="fragment" -->

- some npm packages use programs that need to have native bindings, e.g `sqlite3`, `phantomjs`
<!-- .element: class="fragment" -->


### Deployment

1. Using the code editor in the AWS Console.
<!-- .element: class="fragment" -->

2. Upload a ZIP file in the console. (Up to ~10MB)
<!-- .element: class="fragment" -->

3. Provide a link to a ZIP file in a S3 bucket.
<!-- .element: class="fragment" -->
