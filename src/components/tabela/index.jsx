import React,{useState, useRef, useEffect}from 'react';
import * as style from './style';


function Tabela({elementos,pagination}) {

    const limit=pagination;

    const tableIndex = useRef(0);

    useEffect(()=>{
        changePage();
    },[elementos]);
    
    const [rows,setRows]=useState([]);
    const totalPagina = (elementos.length%limit) ===0 ? elementos.length/limit:Math.trunc(elementos.length/limit)+1;
    const [paginaAtual,setPaginaAtual] = useState(1);


    const changePage = () =>{
        setRows(elementos.slice(tableIndex.current, limit + tableIndex.current));
    }

    const firstPage = () => {
        tableIndex.current=0;
        setPaginaAtual(1);
        changePage();
    }

    const previousPage = () =>{
        tableIndex.current+=(tableIndex.current===0) ? 0:-limit;
        setPaginaAtual((paginaAtual===1)? 1:paginaAtual-1);
        changePage();
    };

    const nextPage = () => {
        tableIndex.current += ((tableIndex.current+limit) >= elementos.length) ? 0:limit;
        setPaginaAtual((paginaAtual===totalPagina)? totalPagina:paginaAtual+1);
        changePage();
    };

    const lastPage = () =>{
        tableIndex.current= limit*Math.trunc(
            (elementos.length%limit)===0 ? elementos.length/limit - 1:elementos.length/limit
        );
        setPaginaAtual(totalPagina);
        changePage();
    }


  return (
      <style.TableContainer>
          <thead>
              <tr>
                  <style.TableColumn>Data</style.TableColumn>
                  <style.TableColumn>Valor</style.TableColumn>
                  <style.TableColumn>Tipo</style.TableColumn>
                  <style.TableColumn>Nome Operador Transação</style.TableColumn>
              </tr>
          </thead>
          <style.TableBody pagination={pagination}>
              {rows.length > 0 ? rows.map((element)=>{
                  return (
                      <style.BodyTr key={element.id}>
                          <style.TableCell>{element.dataTransferencia.substring(0,10)}</style.TableCell>
                          <style.TableCell>{element.valor}</style.TableCell>
                          <style.TableCell>{element.tipo}</style.TableCell>
                          <style.TableCell>{element.nomeOperadorTransacao}</style.TableCell>
                      </style.BodyTr>
                  )
              }):<tr><td colSpan="4"><style.NoDataMsg/></td></tr>}
          </style.TableBody>
          <tfoot>
                <tr>
                    <td><style.TableBtn onClick={(event)=>{firstPage()}} icon="first_page">Primeira pagina</style.TableBtn></td>
                    <td><style.TableBtn onClick={(event)=>{previousPage()}} icon="arrow_back">Anterior</style.TableBtn></td>
                    <td><style.TableBtn onClick={(event)=>{nextPage()}} icon="arrow_forward" iconAfter>Próximo</style.TableBtn></td>
                    <td><style.TableBtn onClick={(event)=>{lastPage()}} icon="last_page" iconAfter>Última página</style.TableBtn></td>
                </tr>
                <tr>
                    <style.Pagination colSpan="4">Página {paginaAtual} de {totalPagina}</style.Pagination>
                </tr>
           </tfoot>
      </style.TableContainer>
  );
}

export default Tabela;