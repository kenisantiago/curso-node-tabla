const fs = require('fs')
const colors = require('colors')

const crearFile = async(base = 5, hasta = 10) =>{
    console.log('=============='.green);
    console.log(colors.red(" Tabla del ")+colors.green(base));
    console.log("==============".green);
    let salida = ''
    let consola = "";

    console.log("base: ".red,base)
    for(let i=1; i<=hasta; i++){
        salida +=`${base} x ${i} = ${base*i}\n`;
        consola +=colors.green(`${base}`)+ colors.red(`x`) +colors.green(`${i}`) + `= ${base*i}\n`;
    }

    console.log(consola)

    try {
       console.log(`Tabla del ${base} creda`);
       fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
       return `Se creo la tabla del ${base}`;
    } catch (error) {
        throw(error);
    }
}


module.exports = {
    crearFile
}