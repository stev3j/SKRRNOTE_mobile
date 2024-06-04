import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import IdeaCard from '../components/IdeaCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import { ButtonContainer } from '../utils/ETCViews';
import Button from '../components/Button';
import { penIconSvg } from '../assets/icons/PenIcon';
import { createIdea, getIdeas, getProblems } from '../database/Functions';
import IdeaList from '../components/IdeaList';
import Idea from '../database/models/Idea';

const IdeaScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [ideas, setIdeas] = useState<any>(getIdeas());

  useEffect(() => {
    console.log(ideas)
  }, ideas)

  return (
    <Container>
      <IdeaList ideas={ideas} setIdeas={setIdeas}/>

      <ButtonContainer>
        <Button text='새로운 아이디어' icon={penIconSvg} onPress={() => {
          // navigation.navigate('IdeaDetail')
          createIdea('아이디어1', '아이디어 내용1')
          setIdeas(getIdeas());
        }} />
      </ButtonContainer>
    </Container>
  );
};

export default IdeaScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
