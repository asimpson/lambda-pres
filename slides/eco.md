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
Create "roles" for your Lambdas that are only allowed access (read/write) to certain things inside AWS.


Roles are made up of individual policies, which grant permissions. e.g.:
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:Get*",
        "s3:List*"
      ],
      "Resource": "*"
    }
  ]
}
```

Compose these policies together and you have a Role!


Roles are easy to revoke/modify.
