import React from 'react';
import * as style from './style';
import CampoInput from '../campoDeInput';

function FormularioPesquisa(props) {



  return (
  <style.FormContainer onSubmit={(event)=>{
    event.preventDefault();
    const form = event.target;
    const id = form.children[3].children[1].value;
    const operador = form.children[2].children[1].value;
    const dataInicio = form.children[0].children[1].value;
    const dataFim = form.children[1].children[1].value;
    props.submitAction(
      (id ? id:1),
      operador,
      dataInicio,
      dataFim
    );
    }}>
    <CampoInput id="Data de Inicio" type="date" placeholder="2001-08-29"/>
    <CampoInput id="Data de Fim" type="date"/>
    <CampoInput id="Nome operador transação" placeholder="ex: Beltrano"/>
    <CampoInput id="ID usuário" placeholder="default: 1"/>
    <style.Button type="reset" icon="refresh">Reset</style.Button>
    <style.Button type="submit" icon="search">Pesquisar</style.Button>
  </style.FormContainer>
  );
}

export default FormularioPesquisa;