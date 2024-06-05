import React from 'react';
import styled from 'styled-components/native';
import Colors from '../styles/Colors';
import { SvgXml } from 'react-native-svg';

interface ButtonParams {
    icon: any;
    text: string;
    onPress: () => void;
    marginBottom?: number;
}

const Button = ({icon, text, onPress, marginBottom}: ButtonParams) => {

  return (
    <NewIssueButton onPress={onPress} marginBottom={marginBottom}>
        <SvgXml xml={icon} width="20" height="20" />
        <ButtonText>{text}</ButtonText>
    </NewIssueButton>
  );
};


const NewIssueButton = styled.TouchableOpacity<{ marginBottom: number | undefined }>`
  position: absolute;
  bottom: 10px;
  background-color: ${Colors.container};
  padding: 10px 20px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 3px;
  border-color: ${Colors.white};
  margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : 0}px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

export default Button;
