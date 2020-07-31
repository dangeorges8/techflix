import styled from 'styled-components';

export const WrapperTitle = styled.h1`
  padding-top: 20px;
  color: var(--white);
	margin-left: 5%;
`;

export const WrapperUl = styled.ul`
	margin-left: 7%;
	margin-top: 15px;
`;

export const Button = styled.button`
  color: var(--white);
  background: var(--black);
  border: 1px solid var(--white);
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
	transition: opacity .3s;
	margin-left: 5%;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

`;

export default Button;
