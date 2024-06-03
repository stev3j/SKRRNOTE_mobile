import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ProblemCard from '../components/ProblemCard';
import Button from '../components/Button';
import { penIconSvg } from '../assets/icons/PenIcon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import { ButtonContainer } from '../utils/ETCViews';

const ProblemScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <ScrollView>
        <ProblemCard title='😡 프로불편러가 되세요!' content='평소에 문제들이 잘 떠오르지 않는 이유는 생각보다 내 삶에 만족하고 있기 때문입니다. 모든 것들을 불편해하세요!'/>
        <ProblemCard title='좋은 아이디어를 찾기 힘들다' content='왜 좋은 아이디어를 찾기 힘들까? 내가 겪은 문제에서 출발하지 않았기 때문...' />
        <ProblemCard title='완전한 몰입을 경험하기 힘들다' content='왜 완전한 몰입을 경험하기 힘들까? 몰입하기 위한 환경이 잘 조성되지 않았기 때문이다. 그리고 ...' />
      </ScrollView>

      <ButtonContainer>
        <Button text='새로운 문제' icon={penIconSvg} onPress={() => {
          navigation.navigate('ProblemDetail')
        }} />
      </ButtonContainer>
    </Container>
    
  );
};

export default ProblemScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
