import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import TopBar from '../components/TopBar';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import AddIcon, { addIconSvg } from '../assets/icons/AddIcon';
import PenIcon, { penIconSvg } from '../assets/icons/PenIcon';
import Colors from '../styles/Colors';
import Button from '../components/Button';
import { ButtonContainer } from '../utils/ETCViews';
import { createIdea, getIdeas, getProblemById, updateProblem } from '../database/Functions';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

type ProblemDetailRouteProp = RouteProp<RootStackParamList, 'ProblemDetail'>;

const ProblemDetailScreen = () => {
  const route = useRoute<ProblemDetailRouteProp>();
  const { id } = route.params! ?? {};

  const title = getProblemById(id)?.title || ''
  const description = getProblemById(id)?.description || ''

  const [_title, setTitle] = useState(title)
  const [_description, setDescription] = useState(description)

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    updateProblem(id, _title.toString(), _description.toString())
    console.log(getProblemById(id))
  }, [_title, _description])

  return (
    <Container>
      <TopBar title='문제' onBackPress={() => {navigation.goBack()}} onMenuPress={() =>{}}></TopBar>
      <Content>
        <Question
          value={_title.toString()}
          onChangeText={setTitle}
          placeholder='어떤 문제를 경험했나요?'/>
        <SubText
          value={_description.toString()}
          onChangeText={setDescription}
          placeholder='이 문제에 대해 깊게 생각해보세요...'
          multiline={true}/>
      </Content>

      <ButtonContainer>
        <Button icon={penIconSvg} text='새로운 아이디어' onPress={() => {
          createIdea('', '', id.toString());
          const lastIdea = getIdeas().slice(-1)[0];
          console.log('Created Idea:', lastIdea); // 일단 들어가진 건 확인 ㅇㅋ
          navigation.navigate('IdeaDetail', {id: lastIdea._id as string});
        }}/>
      </ButtonContainer>
        
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Content = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  /* justify-content: center; */
  /* align-items: center; */
`;

const Question = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
`;

const SubText = styled.TextInput`
  font-size: 16px;
  color: ${Colors.black};
  margin-top: 8px;
  margin-top: 12px;
  line-height: 26px;
`;


export default ProblemDetailScreen;