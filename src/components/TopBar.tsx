import React from 'react';
import styled from 'styled-components/native';
import BackArrowIcon from '../assets/icons/BackArrowIcon.tsx';
import MenuIcon from '../assets/icons/MenuIcon.tsx';

interface TopBarProps {
  title: string;
  onBackPress: () => void;
  onMenuPress: () => void;
}

const TopBar = ({ title, onBackPress, onMenuPress }: TopBarProps) => {
  return (
    <TopBarContainer>
      <BackButton onPress={onBackPress}>
        <BackArrowIcon />
      </BackButton>
      <Title>{title}</Title> 
      <MenuIcon/>
    </TopBarContainer>
  );
};

export default TopBar;

const TopBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const BackButton = styled.TouchableOpacity``;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;