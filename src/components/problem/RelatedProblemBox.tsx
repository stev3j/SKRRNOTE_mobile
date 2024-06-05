import React, { useState } from 'react';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import { SvgXml } from 'react-native-svg';
import { penIconSvg } from '../../assets/icons/PenIcon';
import { TouchableOpacity, View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';
import ProblemModal from './ProblemModal';
import ChangeIcon from '../../assets/icons/ChnageIcon';

interface RelatedProblemBoxProps {
  problemTitle: any;
  onPress?: () => void;
  ideaId: string;
  setProblemId: any;
}

const RelatedProblemBox = ({ problemTitle, onPress, ideaId, setProblemId } : RelatedProblemBoxProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={problemTitle == '' ? () => setModalVisible(true) : onPress}>
        <Container>
          <StyledText>관련 문제 : {problemTitle}</StyledText>
          { 
            problemTitle == '' ? <View/> : 
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <ChangeIcon/>
            </TouchableOpacity>
          }
        </Container>
      </TouchableOpacity>

      <ProblemModal
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
        ideaId={ideaId}
        setProblemId={setProblemId}/>
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