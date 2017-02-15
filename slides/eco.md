# Ecosystem


## AWS!
The big advantage to using Lambda is that you get access to the entire AWS ecosystem.

- API Gateway
<!-- .element: class="fragment" -->

- S3
<!-- .element: class="fragment" -->

- Cloudwatch
<!-- .element: class="fragment" -->

- DynamoDB
<!-- .element: class="fragment" -->

- IoT
<!-- .element: class="fragment" -->

- IAM (security)
<!-- .element: class="fragment" -->


## Cloudwatch
- Cloudwatch provides logging for Lambda functions but it also provides scheduled triggers (serverless cron)!

![](/images/cron.png)


## IAM
Create roles that are only allowed access (read/write) to certain things and then give Lambdas those roles.


Easily revoke/modify a role.
