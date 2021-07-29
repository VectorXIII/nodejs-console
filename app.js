const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()
console.log(argv)
//console.log('base: yargs ', argv.base)

// option l
//listar
//boolean
//default:false


/*const [ , , arg3 ] = process.argv
const [ , base = 0 ] = arg3.split('=')
console.log(base, '\n')*/

//const base = 3

crearArchivo(argv.b, argv.l, argv.h)
    .then( response => console.log(response) )
    .catch( err => console.log(err) )