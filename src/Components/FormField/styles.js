import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 10px;
  display: flex;

`;

export const Title = styled.title`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  flex-direction: column;
  font-size: 16px;
  margin-top: 10px;
  transition: font-size 0.2s;

  &:hover,
  &:focus{
    font-size: 12px;
  }
`;

export const StyledInput2 = styled.textarea`
  width: 400px;
  height: 80px;
  margin-top: 10px;
  flex: 1;
  font-size: 16px;
  transition: font-size 0.2s;

  &:hover,
  &:focus{
    font-size: 12px;
  }
`;

