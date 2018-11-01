'use strict'
const mongoose = require ('mongoose')
//se crea un schema de como van a llegar los datos
const Schema = mongoose.Schema


var SensoresSchema = new Schema({
  hora:{ type: Number },//la hora va entre 0 a 24 en formato militar
  dia:{ type: Number },
  mes:{ type: Number },// el mes va en numero de 1 a 24
  año:{type:Number},
//  tipo:{type:Number},  el tipo es un numero del 1 al 3 el 1 sensor de gas, 2 sensor ultravioleta, 3 sensor sonido
  datossuv:{type:Number,default:0}, //datos del sensor ultravioleta
  datosss:{type:Number,default:0}, //datos del sensor de sonido
  datossg:{type:Number,default:0}, // datos del sensor de gases
  ubicacion:{type:Number},// la ubicacion es un numero que representa la ubicacion del sensor
});// solo hay 1 sensor de cada tipo en cada una de las ubicaciones
//exporta el modelo para que sea utilizable por toda la app 
module.exports = mongoose.model('Sensores',SensoresSchema)
//echo por alejandro hernandez
