import styled from 'styled-components';

export const ValuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;

  background-color: #CCC;
`;

export const Value = styled.p`
    text-transform: capitalize;

    &::before{
        content: "${({valueName})=>valueName}: R$ ";
    }
    &::after{
        content: "${({value})=>value}";
        color: ${({value})=>(value>0) ? "green":(value===0) ?"gray; content: '0,00'":"red"};
    }
`;
