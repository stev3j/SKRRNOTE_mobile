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
import { createIdea, deleteProblem, getIdeas, getProblemById, updateProblem } from '../database/Functions';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { ObjectId } from 'bson';
import { Alert } from 'react-native';

type ProblemDetailRouteProp = RouteProp<RootStackParamList, 'ProblemDetail'>;

const ProblemDetailScreen = () => {
  const route = useRoute<ProblemDetailRouteProp>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { id } = route.params! ?? ''
  // const stringId =  id.toHexString()

  const title = getProblemById(id)?.title || ''
  const description = getProblemById(id)?.description || ''

  const [_title, setTitle] = useState(title)
  const [_description, setDescription] = useState(description)


  useEffect(() => {
    updateProblem(id, _title.toString(), _description.toString())
    console.log(getProblemById(id))
  }, [_title, _description])

  const onDelete = () => {
    deleteProblem(id);
    navigation.goBack()
  }

  return (
    <Container>
      <TopBar title='문제' onBackPress={() => {navigation.goBack()}} onMenuPress={() =>{
        Alert.alert(
          '삭제 확인',
          '정말로 이 아이디어를 삭제하시겠습니까?',
          [
            { text: '취소', style: 'cancel' },
            { text: '삭제', onPress: onDelete, style: 'destructive' }
          ],
          { cancelable: true }
        );
      }}/>
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
          console.log('Created Idea:', lastIdea);
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