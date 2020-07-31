import styled from 'styled-components';

export const LogoImage = styled.img`
 max-width: 210px;

 @media (max-width: 800px) {
   max-width: 120px;
 }
`;

export const MenuWrapper = styled.nav`
  z-index: 10;
  width: 100%;
  height: 94px;
  position: fixed;
  top: 0;
  left: 0;
	right:0;
  padding-left: 5%;
  padding-right: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media ( max-width: 800px){
    height: 40px;
    justify-content: center;
  }
`;
