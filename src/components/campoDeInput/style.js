import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;

    align-self: center;
`;

export const InputLabel = styled.label`
    cursor: pointer;
    text-transform: capitalize;
    color: #FDFDFD;
    font-size: 1.25rem;

    &::after{
        content:":";
    }
`;

export const InputField = styled.input`
    width: 15rem;
    height: 2rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;

    border: none;
`;