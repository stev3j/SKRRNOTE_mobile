import React, { useState } from 'react';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import Modal from 'react-native-modal';
import ProblemList from './ProblemList';
import { getProblems } from '../../database/Functions';
import ProblemListForModal from './ProblemListForModal';

interface ProblemModalProps {
  isVisible: boolean;
  setModalVisible: any;
  ideaId: string;
}

const ProblemModal = ({ isVisible, setModalVisible, ideaId }: ProblemModalProps) => {
  const [problems, setProblems] = useState<any>(getProblems());

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={{ justifyContent: 'flex-end', margin: 0 }}>

      <ModalContent>
        <Container>
          <Title>관련 문제</Title>
        </Container>
        
        <ProblemListForModal problems={problems} ideaId={ideaId} setModalVisible={setModalVisible} />
      </ModalContent>
    </Modal>
  );
};

const Container = styled.View`
  align-items: center;
  padding-top: 20px
`;
const ModalContent = styled.View`
  background-color: white;
  /* padding: 22px; */
  padding-bottom: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* align-items: center; */
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProblemItem = styled.View`
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const ProblemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProblemDescription = styled.Text`
  font-size: 14px;
  color: #666;
`;

export default ProblemModal;