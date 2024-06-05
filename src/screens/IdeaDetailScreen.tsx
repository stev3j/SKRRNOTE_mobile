import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import TopBar from '../components/TopBar';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import Colors from '../styles/Colors';
import Button from '../components/Button';
import { aiIconSvg } from '../assets/icons/AiIcon';
import { ButtonContainer } from '../utils/ETCViews';
import RelatedProblemBox from '../components/problem/RelatedProblemBox';
import { deleteIdea, getIdeaById, getProblemById, updateIdea } from '../database/Functions';
import { ObjectId } from "bson";
import { Alert } from 'react-native';

type IdeaDetailScreenRouteProp = RouteProp<RootStackParamList, 'IdeaDetail'>;

const IdeaDetailScreen = () => {
  const route = useRoute<IdeaDetailScreenRouteProp>();
  const { id } = route.params! ?? '';
  const problemId = (getIdeaById(id)?.relatedProblem || '') as string;
  console.log('problemId : ' + problemId)
  
  // ||는 0, '', null 등등 다 작동함
  // 반면에 ??는 null, undifined만 작동함.

  // MY ERROR : getProblemById(problemId as string)?.title 여기서 에러가 뜸
  // error message : BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
  const problemTitle = problemId === '' ? '' : getProblemById(problemId)?.title || '';
  const title = getIdeaById(id)?.title || '';
  const description = getIdeaById(id)?.description || '';
  const relatedProblem = getIdeaById(id)?.relatedProblem || ''

  const [_title, setTitle] = useState(title)
  const [_description, setDescription] = useState(description)

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    updateIdea(id, _title.toString(), _description.toString(), problemId as string)
    console.log(getIdeaById(id))
  }, [_title, _description, relatedProblem])

  const onDelete = () => {
    deleteIdea(id);
    navigation.goBack()
    // 그리고 리랜더링해서 화면 재구성해야함.. (근데 어떻게함?)
  }

  return (
    <Container>
      <TopBar title='아이디어' onBackPress={() => {navigation.goBack()}} onMenuPress={() =>{
        Alert.alert(
          '삭제 확인',
          '정말로 이 아이디어를 삭제하시겠습니까?',
          [
            { text: '취소', style: 'cancel' },
            { text: '삭제', onPress: onDelete, style: 'destructive' }
          ],
          { cancelable: true }
        );
      }}></TopBar>
      <Content>
        <Question
          value={_title.toString()}
          onChangeText={setTitle}
          placeholder='어떤 신박한 아이디어를 생각해냈나요?'/>
        <RelatedProblemBox problemTitle={problemTitle} onPress={() => {
          navigation.navigate('ProblemDetail', {id: problemId as string})
        }} ideaId={id}/>
        <SubText
          value={_description.toString()}
          onChangeText={setDescription}
          placeholder='아이디어를 정리해보세요...'
          multiline={true}/>
      </Content>
    </Container>
  );
};

const RelatedText = styled.Text`
  font-size: 12px;
  margin-top: 6px;
`
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Content = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
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

export default IdeaDetailScreen;


// TEST!!!
// 665fcbe42a5ca4a460d6f4ba