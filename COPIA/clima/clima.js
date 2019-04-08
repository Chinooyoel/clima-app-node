//creamos el paquete axios
const axios = require("axios");

const getClima = async(lat, lng) => {

    const coords = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9de028d1bf757a39869ab206527f1d62&units=metric`);
    const temp = coords.data.main.temp;

    return temp;
}


//exportamos
module.exports = {
    getClima
}