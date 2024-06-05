import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../navigation/RootStackParamList';
import { MenuIcon20 } from '../../assets/icons/MenuIcon';
import { Alert } from 'react-native';
import { getIdeaById, getProblemById, updateIdea } from '../../database/Functions';
import { ObjectId } from 'bson';

interface ProblemCardForModalProps {
  problemId: string;
  ideaId: string;
  setModalVisible: any;
  setProblemId: any;
}

const ProblemCardForModal = ({ problemId, ideaId, setModalVisible, setProblemId }: ProblemCardForModalProps) => {
  const title = getProblemById(problemId)?.title
  const description = getProblemById(problemId)?.description

  const ideaTitle = getIdeaById(ideaId)?.title
  const ideaDescription = getIdeaById(ideaId)?.description

  return (
    <TouchableOpacity onPress={() => {
      console.log("updateIdea", ideaId, ideaTitle, ideaDescription, problemId)
      setProblemId(problemId.toString())
      updateIdea(ideaId, ideaTitle as string, ideaDescription as string, problemId.toString())
      setModalVisible(false)
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
