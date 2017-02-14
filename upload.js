'use strict';

const aws = require('aws-sdk');
const globby = require('globby');
const fs = require('fs');
const type = require('content-type-mime');

const s3 = new aws.S3();

const upload = () => {
  const files = globby.sync([
    'slides/*',
    'index.html',
    'css/**/*',
    'js/**/*',
    'plugin/**/*',
    'images/**/*',
    'lib/**/*',
  ]);

  const uploadFiles = files.filter(x => fs.lstatSync(x).isFile())
  .map(x => new Promise((resolve, reject) => {
    const Body = fs.readFileSync(x);
    const params = {
      Body,
      Bucket: 'ams-lambda-pres',
      ACL: 'public-read',
      ContentType: type(x),
      Key: x,
    };
    s3.putObject(params, (uploadErr) => {
      if (uploadErr) {
        reject(uploadErr);
      } else {
        resolve();
      }
    });
  }));

  Promise.all(uploadFiles).then(() => console.log('🚀 deployed!'))
  .catch(err => console.log(`🔥 ${err}`));
};

upload();
