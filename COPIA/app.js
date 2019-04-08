//importamos funcion clima y lugar
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima")

//creamos la linea de comando yargs
const argv = require('yargs')
    .options({
        direccion: {
            demand: true,
            alias: 'd'
        }
    })
    .argv;



// clima.getClima(lat, lng);

//con promesas.
// const getInfo = (direccion) => {

//     lugar.getLugar(direccion)
//         .then((infLugar) => {
//             clima.getClima(infLugar.lat, infLugar.lng)
//                 .then((temp) => console.log(`La temperatura de ${direccion} es de ${temp}`))
//                 .catch(console.log);
//         })
//         .catch(console.log);
// }

//con async/await

const getInfo = async(direccion) => {



    try {
        const lugarInfo = await lugar.getLugar(direccion);
        const climaInfo = await clima.getClima(lugarInfo.lat, lugarInfo.lng);
        return `La temperatura de ${direccion} es ${climaInfo}`
    } catch (err) {
        throw new Error("Ha sucedido un error", err);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);