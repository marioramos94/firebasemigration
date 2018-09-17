// Script para subir la data  

const EstacionClimatica =require('./models/index')

const arreglo1 = require('./data/201601')
const arreglo2 = require('./data/201602')
const arreglo3 = require('./data/201603')
const arreglo4 = require('./data/201604')
const arreglo5 = require('./data/201605')
const arreglo6 = require('./data/201606')
const arreglo7 = require('./data/201607')
const arreglo8 = require('./data/201608')
const arreglo9 = require('./data/201609')
const arreglo10 = require('./data/201610')
const arreglo11 = require('./data/201611')
const arreglo12 = require('./data/201612')

arreglo=arreglo1.concat(arreglo2.concat(arreglo3.concat(arreglo4.concat(arreglo5.concat(arreglo6.concat(arreglo7.concat(arreglo8.concat(arreglo9.concat(arreglo10.concat(arreglo11.concat(arreglo12.concat())))))))))))
console.log(arreglo)

var ar=new EstacionClimatica
let up = async () => {
    let doc =await ar.agregarEstacion({ciudad:"Piura",
    pais:"Peru",
estacion:"Piura"})
    arreglo.map(async (a)=>{
    
    let r =  await ar.agregarlectura("u16497yInle7BTEzQyRT","2016",a)
    console.log(r)
    return r
    })
    console.log("subida terminada")
}
up() 
