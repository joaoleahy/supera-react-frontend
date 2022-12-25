import styled from 'styled-components';


export const TableContainer = styled.table`
  align-self: center;
  border-radius: 0.5rem;
  background-color: #207b6e;
  color: #FDFDFD;
  width: 80%;
  height: calc(20rem + 5px);

  font-size: 1.25rem;
`;

export const TableColumn = styled.th`
    white-space: nowrap;
    padding: 0.5rem;
    font-size: 1.45rem;
`

export const TableBody = styled.tbody`
    line-height: 1.5rem;
    background-color: #cbe4d6;

    color: black;

`;

export const NoDataMsg = styled.p`
    text-align: center;
    padding: 0.5rem;

    &::before{
        content: "Não há valores";
    }
`;

export const BodyTr = styled.tr`
    font-weight: 500;
    font-size: 1.25rem;

    &:nth-child(even){
        background-color: #d6eee8;
    }
`;

export const TableCell = styled.td`
    padding: 0.5rem;
    text-align: center;

    ${(props)=>props.children ? "":`
    &::before{
        opacity: 0.5;
        content: "Não Possui";
    }
    `}
`;

export const TableBtn = styled.button`
    white-space: nowrap;
    cursor: pointer;

    background-color: #00bcad;
    margin: 0.5rem 2rem;
    padding: 0.5rem 1rem; 
    border-radius: 0.5rem;

    display: flex;
    align-items: baseline;
    gap: 0.5rem;

    &::${(props)=>props.iconAfter ? "after":"before"}{
        font-family: 'Material Icons';
        content: '${({icon})=>icon}';
        transform: translateY(10%);
    }

    &:hover{
        background-color: #00ab9c;
    }
`;

export const Pagination = styled.td`
    text-align: center;
    padding-bottom: 0.5rem;
`;