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
app.get('/appi/sensores/:sensoresId',(req,res) => {

})
//sube datos de un sensor
app.post('/appi/sensores',(req,res) => {
  console.log(req.body)
  res.send(200,{message:'los datos se han recibido'})
})
//actualiza los datos del sensor
app.put('/appi/sensores/:sensoresId',(req,res) => {

})
app.delete('/appi/sensores/:sensoresId',(req,res) => {
//borra los datos de un sensor
})
app.listen(port,() => {console.log(`API REST corriendo en http://localhost:${port}`)})
