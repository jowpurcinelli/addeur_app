import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 2;
  padding: 15px;
  padding-left: 10px;
  margin-top: 15px;
  border-radius: 25px;
  border-color: grey;
  background-color: white;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;
export const Text = styled.Text`
  font-size: 16;
  font-weight: 500;
  color: grey;
`;
export const Avatar = styled.Image`
  width: 60;
  height: 60;
  border-radius: 30; 

`
