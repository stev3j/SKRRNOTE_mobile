import React from 'react';
import styled from 'styled-components/native';
import Colors from '../styles/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';

interface CardProps {
  title: string;
  content: string;
}

const ProblemCard = ({ title, content }: CardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('ProblemDetail', {title, content})
    }}>
      <StyledCard>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </StyledCard>
    </TouchableOpacity>
  );
};

export default ProblemCard;

const StyledCard = styled.View`
  background-color: ${Colors.container};
  padding: 15px;
  margin: 10px 20px;
  border-radius: 10px;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardContent = styled.Text`
  font-size: 14px;
  color: ${Colors.content};
`;
