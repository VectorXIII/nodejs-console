const { argv } = require('yargs')
    .option('b', {
        alias: 'base',
        describe: 'El número base de la tabla.',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        describe: 'Lista la tabal en consola.',
        type: 'boolean',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        describe: 'Indica el número máximo del multiplicando.',
        type: 'number',
        default: 10
    }).check( (argv, option) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true
    })

module.exports = argv