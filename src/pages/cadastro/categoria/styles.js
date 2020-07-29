import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.h1`
  padding-top: 20px;
  color: var(--white);
`;

export const Button = styled.button`
  color: var(--white);
  background: var(--primary);
  border: 1px solid var(--white);
  padding: 16px 24px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: opacity 1s;

  &:hover,
  &:focus {
    opacity: 0.6;
  }
  @media ( max-width: 800px ){
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--primary);
  outline: 0;
  text-align: center;
  border: 0;
  border-radius: 0;
  }
`;

export default Button;