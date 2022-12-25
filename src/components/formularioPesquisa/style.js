import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 4rem;
  row-gap: 2rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
  background-color: #00bcad;
  color: #FDFDFD;
  font-size: 1.25rem;
  align-self: flex-end;
  padding: 0.75rem 5rem;
  border-radius: 0.5rem;

  &::before{
    font-family:'Material Icons';
    content: "${({icon})=>icon}";
    font-size: 1.5rem;
  }

  &:hover{
    background-color: #00ab9c
  }
`;