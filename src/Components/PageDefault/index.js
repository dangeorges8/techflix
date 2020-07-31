import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 94px;

	@media ( max-width: 800px) {
		padding-top: 40px;
	}

`;

function PageDefault({children}) {
  return (
    <>
      <Menu/>
        <Main>
          {children}
        </Main>
      <Footer/>
    </>
  );
}

export default PageDefault;
