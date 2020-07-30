import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  height: 197px;
  width: 298px;
  border: 2px solid;
  display: inline-block;
  text-decoration: none;
  background-image: ${({url}) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  transition: opacity .3s;
  transition: font-size .3s;
  font-size: 0px;
  text-justify:bottom;
  &:hover,
  &focus {
    opacity: .5;
    font-size: 14px;
  }
`;

export const VideoCardTitle = styled.h2`
  font-weight:normal;
  margin-top: 160px;
  opacity: 0.9;
`;
