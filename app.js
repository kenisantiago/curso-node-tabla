const { option } = require('yargs');
const { crearFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const yargs = require('yargs');

console.clear();

//Desestructuración
console.log("Argv: ",argv);
//const base = argv.base;
const {base, hasta} = argv;



crearFile(base, hasta)
.then(()=>console.log("Archivo crado con exito"))
.catch((err)=>console.log("Error al crear archivo, ",err));