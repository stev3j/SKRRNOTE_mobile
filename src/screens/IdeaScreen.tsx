import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import IdeaCard from '../components/IdeaCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import { ButtonContainer } from '../utils/ETCViews';
import Button from '../components/Button';
import { penIconSvg } from '../assets/icons/PenIcon';

const IdeaScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <ScrollView>
        <IdeaCard title='아이디어 1' content='아이디어 내용 1' />
        <IdeaCard title='아이디어 2' content='아이디어 내용 2' />
        <IdeaCard title='아이디어 3' content='아이디어 내용 3' />
      </ScrollView>

       <ButtonContainer>
        <Button text='새로운 아이디어' icon={penIconSvg} onPress={() => {
          navigation.navigate('IdeaDetail')
        }} />
      </ButtonContainer>
    </Container>
  );
};

export default IdeaScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
