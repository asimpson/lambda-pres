# Tips


## Avoid lock-in
Currently there is no way to run functions locally, it would be a very large task to emulate the AWS. We recommend writing the bulk of your logic as libraries or packages native to your chosen language, using only thin connective layers in the Lambda functions themselves. This makes it easy to unit-test your functions, and makes them more portable if you’re worried about vendor lock-in.

Apex README


## Go over budget
Set memory and execution time higher than you think and dial it back once your lambda matures. Note: you are only billed for the time you use.
