import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import IdeaCard from '../components/idea/IdeaCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import { ButtonContainer } from '../utils/ETCViews';
import Button from '../components/Button';
import { penIconSvg } from '../assets/icons/PenIcon';
import { createIdea, getIdeas, getProblems } from '../database/Functions';
import IdeaList from '../components/idea/IdeaList';
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
        <Button text='새로운 아이디어' icon={penIconSvg} marginBottom={34} onPress={() => {
          // ERROR : Argument passed in must be a string of 12 bytes or a string of 24 hex ...
          createIdea('', '', '') // 만들고
          const lastIdea = getIdeas().slice(-1)[0]; // 만들어진 객체
          navigation.navigate('IdeaDetail', {id: lastIdea._id as string}) // id 넘겨주기
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
