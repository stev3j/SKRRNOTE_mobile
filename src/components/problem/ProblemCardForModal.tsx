import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../navigation/RootStackParamList';
import { MenuIcon20 } from '../../assets/icons/MenuIcon';
import { Alert } from 'react-native';
import { getProblemById, updateIdea } from '../../database/Functions';

interface ProblemCardForModalProps {
  problemId: string;
  ideaId: string;
}

const ProblemCardForModal = ({ problemId, ideaId }: ProblemCardForModalProps) => {
  const title = getProblemById(problemId)?.title
  const description = getProblemById(problemId)?.description

  return (
    <TouchableOpacity onPress={() => {
      console.log('update!!')
      updateIdea(ideaId, title as string, description as string, problemId)
    }}>
      <StyledCard>
        <CardTitle>{title === '' ? '비어 있는 문제' : title as string}</CardTitle>
        <CardContent>{description === '' ? '문제의 내용을 채워주세요!' : description  as string}</CardContent>
      </StyledCard>
    </TouchableOpacity>
  );
};

export default ProblemCardForModal;

const StyledCard = styled.View`
  background-color: ${Colors.container};
  padding: 15px;
  margin: 10px 20px;
  border-radius: 10px;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardContent = styled.Text`
  font-size: 14px;
  color: ${Colors.content};
`;
