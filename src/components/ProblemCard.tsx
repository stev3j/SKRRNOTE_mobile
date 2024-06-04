import React from 'react';
import styled from 'styled-components/native';
import Colors from '../styles/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParamList';
import { MenuIcon20 } from '../assets/icons/MenuIcon';
import { Alert } from 'react-native';

interface CardProps {
  title: string;
  content: string;
  onDelete: () => void;
}

const ProblemCard = ({ title, content, onDelete }: CardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('ProblemDetail', {title, content})
    }}>
      <StyledCard>
        <Container>
          <CardTitle>{title}</CardTitle>
          <TouchableOpacity onPress={() => {
            console.log('clicked menu')
            Alert.alert(
              '삭제 확인',
              '정말로 이 아이디어를 삭제하시겠습니까?',
              [
                { text: '취소', style: 'cancel' },
                { text: '삭제', onPress: onDelete, style: 'destructive' }
              ],
              { cancelable: true }
            );
          }}>
            <MenuIcon20 />
          </TouchableOpacity>
        </Container>
        
        <CardContent>{content}</CardContent>
      </StyledCard>
    </TouchableOpacity>
  );
};

export default ProblemCard;

const StyledCard = styled.View`
  background-color: ${Colors.container};
  padding: 15px;
  margin: 10px 20px;
  border-radius: 10px;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardContent = styled.Text`
  font-size: 14px;
  color: ${Colors.content};
`;
