import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 4%;
  margin-bottom: 2px;
`;

export const Title = styled.h3`
	margin-left: 16px;
  font-size: 35px;
  line-height: 1;
	font-style: normal;
  font-weight: normal;
  padding: 20px;
  display: inline-block;
  border-radius: 4px;
  margin-bottom: 2px;
  @media(max-width: 800px) {
		margin-left:0;
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  }
  @media(max-width: 800px) {
    display: block;
    margin-bottom: 2px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
	padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  li {
    margin-right: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: #303030;
    border-radius: 5px;
  }

  &::-webkit-scrollbar {
    height: 12px;
  }
  `;
