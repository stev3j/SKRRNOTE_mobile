import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ProblemCard from '../components/problem/ProblemCard';
import Button from '../components/Button';
import { penIconSvg } from '../assets/icons/PenIcon';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import { ButtonContainer } from '../utils/ETCViews';
import { createProblem, getProblems } from '../database/Functions';
import ProblemList from '../components/problem/ProblemList';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const ProblemScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [problems, setProblems] = useState<any>(getProblems());

  useFocusEffect(
    React.useCallback(() => {
      setProblems(getProblems());
    }, [])
  );

  useEffect(() => {
    console.log(problems);
  }, [problems]);

  return (
    <Container>
      <ProblemList problems={problems} setProblems={setProblems}/>

      <ButtonContainer>
        <Button text='새로운 문제' icon={penIconSvg} marginBottom={34} onPress={() => {
          createProblem('', '') // 만들고
          const lastProblem = getProblems().slice(-1)[0]; // 만들어진 객체
          navigation.navigate('ProblemDetail', {id: lastProblem._id as string}) // id 넘겨주기
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
