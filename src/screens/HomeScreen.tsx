import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import styled from 'styled-components/native';
import Card from '../components/problem/ProblemCard';
import Colors from '../styles/Colors';
import TabContainer from '../components/TabContainer';
import IdeaScreen from './IdeaScreen';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import ProblemScreen from './ProblemScreen';
import Button from '../components/Button';
import { penIconSvg } from '../assets/icons/PenIcon';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('문제');

  const renderContent = () => {
    if (selectedTab === '문제') {
      return <ProblemScreen/>;
    } else if (selectedTab === '아이디어') {
      return <IdeaScreen/>;
    }
  };

  return (
    <Container>
      <Header>
        <Title>SKRR NOTE</Title>
      </Header>

      <TabContainer selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      
      <ContentContainer>
        {renderContent()}
      </ContentContainer>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  padding-top: 60px;
`;


const Header = styled.View`
  padding: 20px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.black};
  font-weight: 700;
  font-family: 'pretendard'; 
`; // myPROBLEM : 폰트 적용이 안됨.


const ContentContainer = styled.View`
  flex: 1;
`;

