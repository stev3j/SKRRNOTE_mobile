import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../styles/Colors';

interface TabContainerProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}


const TabContainer = ({ selectedTab, setSelectedTab }: TabContainerProps) => {
  return (
    <Container>
      <Tab onPress={() => setSelectedTab('문제')} isSelected={selectedTab === '문제'}>
        <TabText isSelected={selectedTab === '문제'}>문제</TabText>
      </Tab>
      <Tab onPress={() => setSelectedTab('아이디어')} isSelected={selectedTab === '아이디어'}>
        <TabText isSelected={selectedTab === '아이디어'}>아이디어</TabText>
      </Tab>
    </Container>
  );   
};

export default TabContainer;

const TabText = styled.Text<{ isSelected: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: ${({ isSelected }) => (isSelected ? Colors.black : Colors.content)};
  font-family: 'pretendard';
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0;
`;

const Tab = styled(TouchableOpacity)<{ isSelected: boolean }>`
  padding: 10px;
  border-bottom-width: ${({ isSelected }) => (isSelected ? '2px' : '0')};
  border-bottom-color: ${({ isSelected }) => (isSelected ? Colors.black : 'transparent')};
`;
