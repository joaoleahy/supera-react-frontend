import React,{useState,useEffect} from 'react';
import './ResetStyle.css';
import './GlobalStyle.css';
import * as style from './style';
import FormularioPesquisa from './components/formularioPesquisa';
import Tabela from './components/tabela';
import TransferenciasService from './services/TransferenciasService';
import TabelaSaldo from './components/tabelaSaldo';


function App() {
  
  const setOriginalValues = (id) =>{
    TransferenciasService(id).get.then((res)=>setListaOriginal(res.data))
  };

  const [tableData,setTableData] = useState([]);
  const [listaOriginal,setListaOriginal] = useState([]);

  useEffect(()=>{
    TransferenciasService(1).get.then((res)=>setTableData(res.data)).then(setOriginalValues(1));
  },[]);

  const submitAction = (id,operador,dataInicio,dataFim) => {
    TransferenciasService(id,operador,dataInicio,dataFim).get.then((res)=>setTableData(res.data)).then(setOriginalValues(id));
  }
    

  return (
    <style.AppContainer>
      <FormularioPesquisa submitAction={submitAction}>
      </FormularioPesquisa>
      <TabelaSaldo listaOriginal={listaOriginal} listaFiltrada={tableData}/>
      <Tabela elementos={tableData} pagination={5}/>
    </style.AppContainer>
  );
}

export default App;
