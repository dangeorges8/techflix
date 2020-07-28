import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 5%;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 35px;
  line-height: 1;
  font-weight: normal;
  padding: 20px;
  display: inline-block;
  border-radius: 4px;
  margin-bottom: 16px;
  @media(max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media(max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 6px;
  }
`;

export const VideoCardList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  overflow-x: auto;
  li {
    margin-right: 16px;
    margin-bottom: 10px
  }
  &::-webkit-scrollbar-track {
    background-color: #414141;
    border-radius: 5px;
  }
  
  &::-webkit-scrollbar {
    height: 12px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({color}) => "#000"};
  }
`;
