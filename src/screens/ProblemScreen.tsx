import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ProblemCard from '../components/ProblemCard';
import Button from '../components/Button';
import { penIconSvg } from '../assets/icons/PenIcon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import { ButtonContainer } from '../utils/ETCViews';
import { createProblem, getProblems } from '../database/Functions';
import ProblemList from '../components/ProblemList';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const ProblemScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [problems, setProblems] = useState<any>(getProblems());

  useEffect(() => {
    console.log(problems);
  }, [problems]);

  return (
    <Container>
      <ProblemList problems={problems} setProblems={setProblems}/>

      <ButtonContainer>
        <Button text='새로운 문제' icon={penIconSvg} onPress={() => {
          // navigation.navigate('ProblemDetail')
          createProblem('새로운 문제2', '새로운 문제의 내용3')
          console.log(getProblems())
          setProblems(getProblems());
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
