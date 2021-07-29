const fs = require('fs')
const colors = require('colors')

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    let salida = '', salidaConsola = ''
    for (let i = 1; i < hasta+1; i++) {
        salidaConsola += `${i}: ${colors.cyan(base)} X ${i} = ${base*i} \n`
        salida += `${i}: ${base} X ${i} = ${base*i} \n`
    }

    if(listar){
        console.log('===================================')
        console.log('            Tabla del ', `${base}`.cyan)
        console.log('===================================')
        console.log(salidaConsola)
    }

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `El archivo tabla-${base}.txt ha sido creado satisfactoriamente.\n`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}