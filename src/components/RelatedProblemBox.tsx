import React, { useState } from 'react';
import styled from 'styled-components/native';
import Colors from '../styles/Colors';
import { SvgXml } from 'react-native-svg';
import { penIconSvg } from '../assets/icons/PenIcon';
import { TouchableOpacity, View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';
import ProblemModal from './ProblemModal';

interface RelatedProblemBoxProps {
  problemTitle: string;
  onPress?: () => void;
}

const RelatedProblemBox = ({ problemTitle, onPress } : RelatedProblemBoxProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={problemTitle == '' ? () => setModalVisible(true) : onPress}>
        <Container>
          <StyledText>관련 문제 : {problemTitle}</StyledText>
          { 
            problemTitle == '' ? <View/> : 
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <SvgXml xml={penIconSvg} width={16} height={16}/>
            </TouchableOpacity>
          }
        </Container>
      </TouchableOpacity>

      <ProblemModal isVisible={modalVisible} onClose={() => {
        setModalVisible(false);
      }}/>
      {/* <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <ModalContent>
          <Text>관련 문제</Text>
          <Button title="닫기" onPress={() => setModalVisible(false)} />
        </ModalContent>
      </Modal> */}
    </>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${Colors.container};
  border-radius: 4px;
  margin-top: 8px;
`;

const StyledText = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #000;
`;

const ModalContent = styled.View`
  background-color: white;
  padding: 22px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
`;

export default RelatedProblemBox;