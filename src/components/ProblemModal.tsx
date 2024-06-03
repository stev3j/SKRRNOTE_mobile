import React from 'react';
import styled from 'styled-components/native';
import Colors from '../styles/Colors';
import Modal from 'react-native-modal';

interface ProblemModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ProblemModal = ({ isVisible, onClose }: ProblemModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <ModalContent>
        <Title>관련 문제</Title>
        <ProblemItem>
          <ProblemTitle>좋은 아이디어를 찾기 힘들다</ProblemTitle>
          <ProblemDescription>
            왜 좋은 아이디어를 찾기 힘들까? 내가 겪은 문제에 서부터 출발하지 않았기 때문...
          </ProblemDescription>
        </ProblemItem>
        <ProblemItem>
          <ProblemTitle>완전한 몰입을 경험하기 힘들다</ProblemTitle>
          <ProblemDescription>
            왜 완전한 몰입을 경험하기 힘들까? 몰입하기 위한 환경이 잘 조성되지 않았기 때문이다. 그리고 ...
          </ProblemDescription>
        </ProblemItem>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.View`
  background-color: white;
  padding: 22px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
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