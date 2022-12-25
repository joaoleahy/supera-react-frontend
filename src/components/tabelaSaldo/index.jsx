import React,{useState, useEffect} from 'react';
import * as style from './style';


function TabelaSaldo({listaOriginal,listaFiltrada}) {

  const calculaValoresLista = (array) => {
    return array.reduce((total,item)=> total + item.valor ,0);
  };

  const [original,setOriginal] = useState(calculaValoresLista(listaOriginal));
  const [filtrada,setFiltrada] = useState(calculaValoresLista(listaFiltrada));

  useEffect(() => {
    setOriginal(calculaValoresLista(listaOriginal));
    setFiltrada(calculaValoresLista(listaFiltrada));
  },[listaOriginal,listaFiltrada]);

  return (
    <style.ValuesContainer>
      <style.Value valueName="Saldo Total" value={original}/>
      <style.Value valueName="Saldo no período" value={filtrada}/>
    </style.ValuesContainer>
  );
}

export default TabelaSaldo;