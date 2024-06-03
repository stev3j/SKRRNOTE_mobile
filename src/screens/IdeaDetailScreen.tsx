import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import TopBar from '../components/TopBar';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import Colors from '../styles/Colors';
import Button from '../components/Button';
import { aiIconSvg } from '../assets/icons/AiIcon';
import { ButtonContainer } from '../utils/ETCViews';
import RelatedProblemBox from '../components/RelatedProblemBox';

type IdeaDetailScreenRouteProp = RouteProp<RootStackParamList, 'IdeaDetail'>;

const IdeaDetailScreen = () => {
  const route = useRoute<IdeaDetailScreenRouteProp>();
    const { problemTitle, title, content } = route.params as { problemTitle?: string; title?: string; content?: string } ?? {};

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <TopBar title='아이디어' onBackPress={() => {navigation.goBack()}} onMenuPress={() =>{}}></TopBar>
      <Content>
        <Question
          placeholder='어떤 신박한 아이디어를 생각해냈나요?'>
            {title}
        </Question>
        
        <RelatedProblemBox problemTitle={problemTitle ?? ''} onPress={() => {
          navigation.navigate('ProblemDetail', {title: problemTitle ?? '', content: ''})
        }}/>

        <SubText
          placeholder='아이디어를 정리해보세요...'
          multiline={true}>
            {content}
        </SubText>
      </Content>

      {/* <ButtonContainer>
        <Button icon={aiIconSvg} text='비슷한 아이디어' onPress={() => {

        }}/>
      </ButtonContainer> */}
        
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