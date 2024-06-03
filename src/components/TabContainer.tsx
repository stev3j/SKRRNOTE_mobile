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
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: selectedTab === '문제' ? Colors.black : Colors.content }}>문제</Text>
      </Tab>
      <Tab onPress={() => setSelectedTab('아이디어')} isSelected={selectedTab === '아이디어'}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: selectedTab === '아이디어' ? Colors.black : Colors.content }}>아이디어</Text>
      </Tab>
    </Container>
  );
};

export default TabContainer;

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
