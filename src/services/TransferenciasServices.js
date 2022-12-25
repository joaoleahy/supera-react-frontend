import axios from 'axios';

const TransferenciasService = (id,operador,dataInicio,dataFim) =>{
    const URL = `http://localhost:8080/transferencias/${id}${(operador || dataInicio || dataFim) ? `?operador=${operador}&dataInicio=${dataInicio}&dataFim=${dataFim}`:""}`;
    console.log(URL)

    return {
        get: axios.get(URL),
    }
}

export default TransferenciasService;