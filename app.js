const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");


const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;


// const getInfo = (direccion) => {
//     lugar.getLugarLatLng(direccion)
//         .then((informacion) => {
//             clima.getClima(informacion.lat, informacion.lng)
//                 .then((temperatura) => {
//                     console.log(`La temperatura de ${direccion} es de ${temperatura}`)
//                 }).catch(console.log);
//         })
//         .catch(() => {
//             console.log(`La temperatura de ${direccion} no se pudo encontrar`)
//         });
// }




const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura de ${direccion} es de ${temp}`;
    } catch (e) {
        return `La temperatura de ${direccion} no se pudo encontrar`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);