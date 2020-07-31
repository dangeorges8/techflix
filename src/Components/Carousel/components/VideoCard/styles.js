import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  height: 197px;
  width: 298px;
  border: 2px solid;
  text-decoration: none;
  background-image: ${({url}) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  transition: opacity .3s;
  transition: font-size .3s;
  font-size: 0px;
  text-justify:bottom;
	overflow: hidden;
	cursor: pointer;
	color: white;
	position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  flex: 0 0 298px;
  &:hover,
  &focus {
    opacity: .5;
    font-size: 14px;
  }
	&:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoCardTitle = styled.h2`
  font-weight:normal;
  margin-top: 160px;
  margin-left: 10px;
	opacity: 0.9;
`;
