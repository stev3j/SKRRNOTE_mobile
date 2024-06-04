import React from 'react';
import styled from 'styled-components/native';
import Colors from '../styles/Colors';
import { SvgXml } from 'react-native-svg';

interface ButtonParams {
    icon: any;
    text: string;
    onPress: () => void;
}

const Button = ({icon, text, onPress}: ButtonParams) => {

  return (
    <NewIssueButton onPress={onPress}>
        <SvgXml xml={icon} width="20" height="20" />
        <ButtonText>{text}</ButtonText>
    </NewIssueButton>
  );
};


const NewIssueButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  background-color: ${Colors.container};
  padding: 10px 20px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 3px;
  border-color: ${Colors.white};
  margin-bottom: 30px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

export default Button;
