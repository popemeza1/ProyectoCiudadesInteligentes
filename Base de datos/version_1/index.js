'use strict'
const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
//muestra todos los sensores
app.get('/appi/sensor',(req,res) => {
  res.send(200,{sensores:[]})
})
//muestra un sensor en especifico
app.get('/appi/sensores/sensoresId',(req,res) => {

})
app.listen(port,() => {console.log(`API REST corriendo en http://localhost:${port}`)})
