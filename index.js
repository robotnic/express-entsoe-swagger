const express = require('express')
const { Entsoe } = require('express-entsoe');
const swaggerUi = require('swagger-ui-express');


const app = express()
const port = process.env.PORT ||3300 



app.use('/swagger', swaggerUi.serve, swaggerUi.setup(null, {
  swaggerOptions: {
    url: '/tmp'
  }
}));


app.use(Entsoe.init({
  securityToken: '68aa46a3-3b1b-4071-ac6b-4372830b114f',
  cacheDir: 'cacheDir'
}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
