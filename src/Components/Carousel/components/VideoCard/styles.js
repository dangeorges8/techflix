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
  transition: transform .3s;
  font-size: 0px;
  text-justify:bottom;
	overflow: hidden;
	cursor: pointer;
	color: white;
	position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1px;
  flex: 0 0 298px;
  &:hover,
  &focus {
    opacity: .6;
		font-size: 12px;
		transform: scale(1.1);

  }
	&:not(:first-child) {
    margin-left: 20px;
	}
`;

export const VideoCardTitle = styled.h2`
	font-weight: normal;
	background-color: rgba(20,20,20, 0.9);
	opacity: 1;
	border-radius: 4px;
`;
