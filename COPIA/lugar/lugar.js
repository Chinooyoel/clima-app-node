//creamos el paquete axion
const axios = require("axios");

const getLugar = async(direccion) => {

    const direccionURL = encodeURI(direccion);

    const instancia = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionURL}`,
        headers: { "X-RapidAPI-Key": "d7c6ae41a1mshd73d0b31a8131e9p13d77cjsn5ad13d8b6bfb" }
    });

    const resp = await instancia.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No se pudo encontrar la direccion ${direccion}`);
    }

    const lng = resp.data.Results[0].lon;
    const lat = resp.data.Results[0].lat;

    return {
        direccion,
        lng,
        lat
    }

}

//exportamos las funciones
module.exports = {
    getLugar
}