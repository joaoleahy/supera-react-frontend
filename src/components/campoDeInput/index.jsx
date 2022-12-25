import React from 'react';
import * as style from './style';

function CampoInput(props) {

  return (
    <style.InputContainer>
        <style.InputLabel htmlFor={props.id}>{props.id}</style.InputLabel>
        <style.InputField 
        id={props.id} 
        placeholder={props.placeholder}
        type={props.type}/>
    </style.InputContainer>
    );
}

export default CampoInput;