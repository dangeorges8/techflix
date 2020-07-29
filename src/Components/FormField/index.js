import React from 'react';
import { Wrapper, Title, StyledInput, StyledInput2 } from './styles';

function FormField( { placeholder, label, type, name, value, onChange} ) {
  return (
    <Wrapper>
        <div>
        <Title>
          {label}
          </Title>
            <StyledInput
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          />
          
          </div>
    </Wrapper>
  )
}

export function FormField2( { placeholder, label, type, name, value, onChange} ) {
  return (
    <Wrapper>
      <div>
        <label>
          {label}
          <StyledInput2
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          />
        </label>
        </div>
    </Wrapper>
  )
}

export default FormField;