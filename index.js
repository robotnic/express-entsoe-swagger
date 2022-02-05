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


const entsoeConfig={
  securityToken: process.env.securityToken,
  awsBucket: process.env.awsBucket,
  awsSecretAccessKey: process.env.awsSecretAccessKey,
  awsAccessKeyId: process.env.awsAccessKeyId,
  awsRegion: process.env.awsRegion
};
app.use(Entsoe.init(entsoeConfig));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
