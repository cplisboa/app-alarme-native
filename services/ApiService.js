import axios from "axios";
const baseUrl = 'http://teste.in';

const statusAlarme = ()=> {
    axios.get(baseUrl).then((response) => {
        console.log(response.data);
    });

}
