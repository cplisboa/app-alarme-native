import axios from "axios";
const baseUrl = 'http://3mhpy.ddns.net:85/';

export const ativaAlarme = async (toggle) => {
    const response = await axios.get(baseUrl + 'led1' + toggle);
    console.log(response.data);
    return response.data;
}

export const ligaLuz = async (toggle) => {
    const response = await axios.get(baseUrl + 'led2' + toggle);
    console.log(response.data);
    return response.data;
}

export const statusAlarme = ()=> {
    //A ser implementado
}

