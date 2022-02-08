const express = require('express')
const { Entsoe } = require('express-entsoe');
const swaggerUi = require('swagger-ui-express');
var cors = require('cors')



const app = express()
const port = process.env.PORT || 3300

app.use(cors())


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(null, {
  swaggerOptions: {
    url: '/entsoe'
  }
}));

/*
const entsoeConfig={
  securityToken: process.env.securityToken,
  awsBucket: process.env.awsBucket,
  awsSecretAccessKey: process.env.awsSecretAccessKey,
  awsAccessKeyId: process.env.awsAccessKeyId,
  awsRegion: process.env.awsRegion
};
*/
const entsoeOptions = {
  securityToken: process.env.securityToken || '68aa46a3-3b1b-4071-ac6b-4372830b114f',
  awsBucket:  process.env.awsBucket || 'elasticbeanstalk-eu-central-1-209114680710',
  awsRegion:  process.env.awsRegion || 'eu-central-1'
};
if (process.env.awsAccessKeyId) {
  entsoeOptions.awsAccessKeyId = process.env.awsAccessKeyId;
}
if (process.env.awsSecretAccessKey) {
  entsoeOptions.awsSecretAccessKey = process.env.awsSecretAccessKey;
}
console.log(entsoeOptions);
app.use(Entsoe.init(entsoeOptions));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
