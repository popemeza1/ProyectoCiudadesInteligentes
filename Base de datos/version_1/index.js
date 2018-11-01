'use strict'
const express = require ('express') //importa express
const bodyParser = require ('body-parser') //importa body parse para archivos json
const mongoose = require ('mongoose') // importa mongodb
const Sensores = require ('./models/sensores') // importa el modelo de los sensores
const app = express() //declara que se usara express
const port = process.env.PORT || 3000 //declara el puerto local que se va a usar
app.use(bodyParser.urlencoded({ extended : false }))// declara que se usara body parcer
app.use(bodyParser.json())// declara el tipo de parcer en este caso json
//muestra todos los sensores
app.get('/appi/sensores',(req,res) => {
  res.send(200,{sensores:[]})
})
//muestra un sensor en especifico
app.get('/appi/sensores/:sensoresId',(req,res) => {

})
//sube datos de un sensor
app.post('/appi/sensores',(req,res) => {
  console.log('POST /appi/sensores')
  console.log(req,body)
  //se declara lo que se va a pedir a la hora de crear unos nuevos sensores
  let sensores = new Sensores ()
  sensores.hora = req.body.hora
  sensores.dia = req.body.dia
  sensores.mes = req.body.mes
  sensores.año = req.body.año
  //sensores.tipo = req.body.tipo
  sensores.datossuv = req.body.datossuv
  sensores.datosss = req.body.datosss
  sensores.datossg = req.body.datossg
  sensores.ubicacion = req.body.ubicacion
//para guardar los datos en el servidor
  sensores.save((err, sensoresGuardados) => {
    //mensaje de error en caso de que se nesesite
    if (err) res.status(500).send({message: `error al guardar los datos ${err}`})
    //mensaje de datos guardados
    res.status(200).send({sensores: sensoresGuardados})
  })
})
//actualiza los datos del sensor
app.put('/appi/sensores/:sensoresId',(req,res) => {

})
//borra los datos de un senso
app.delete('/appi/sensores/:sensoresId',(req,res) => {

})
mongoose.connect('mongodb://localhost:27017/datosCiudad', (err,res) => {
  if(err){
    //mensaje de error en caso de que no se conecte bien
    return console.log(`error al conectar con la base de datos: ${err}`)
  }
  //se declara que se pudo connectar
  console.log('conexion a la base de datos establecisa...')
  app.listen(port,() => {
    //declara donde se esta ejecutando en que host
    console.log(`API REST corriendo en http://localhost:${port}`)
  })
})
//echo por alejandro hernandez
