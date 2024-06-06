import React, { useEffect, useState } from 'react';
import { RouteProp, useFocusEffect, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
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

  /** 아이디어 내용! */

  const title = getIdeaById(id)?.title || '';
  const [_title, setTitle] = useState(title)

  const description = getIdeaById(id)?.description || '';
  const [_description, setDescription] = useState(description)


  /** 아이디어와 문제 연결 */
  
  const _problemId = getIdeaById(id)?.relatedProblem || '';
  const [problemId, setProblemId] = useState(_problemId);
  const _problemTitle = problemId == '' ? '' : getProblemById(problemId as string)?.title || '';
  const [problemTitle, setProblemTitle] = useState(_problemTitle);





  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useFocusEffect(
    React.useCallback(() => {
      const changedProblemId = getIdeaById(id)?.relatedProblem || '';
      if (changedProblemId !== '') {
        setProblemTitle(getProblemById(changedProblemId as string)?.title || '')
      }
    }, [])
  );

  useEffect(() => {
    const changedProblemId = getIdeaById(id)?.relatedProblem || '';
    if (changedProblemId !== '') {
      setProblemTitle(getProblemById(changedProblemId as string)?.title || '')
    }
  }, [problemId])

  useEffect(() => {
    updateIdea(id, _title.toString(), _description.toString(), problemId as string)
    console.log(getIdeaById(id))
  }, [_title, _description])

  const onDelete = () => {
    deleteIdea(id);
    navigation.goBack()
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
      }}/>
      <Content>
        <Question
          value={_title.toString()}
          onChangeText={setTitle}
          placeholder='어떤 신박한 아이디어를 생각해냈나요?'/>

        <RelatedProblemBox problemTitle={problemTitle} onPress={() => {
          navigation.navigate('ProblemDetail', {id: problemId as string})
        }} ideaId={id} setProblemId={setProblemId}/>

        <SubText
          value={_description.toString()}
          onChangeText={setDescription}
          placeholder='아이디어를 정리해보세요...'
          multiline={true}/>
      </Content>
    </Container>
  );
};

export default IdeaDetailScreen;

const Question = styled.TextInput.attrs({
  placeholderTextColor: Colors.placeholder,
})`
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
  color: ${Colors.black};
  font-family: 'pretendard';
`;

const SubText = styled.TextInput.attrs({
  placeholderTextColor: Colors.placeholder,
})`
  font-size: 16px;
  color: ${Colors.black};
  margin-top: 8px;
  line-height: 26px;
  font-family: 'pretendard';
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Content = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
`;
