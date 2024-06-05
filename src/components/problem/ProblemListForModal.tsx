import React from 'react';
import { FlatList } from 'react-native';
import IdeaCard from '../idea/IdeaCard';
import { deleteProblem, getProblems } from '../../database/Functions';
import ProblemCardForModal from './ProblemCardForModal';

interface ProblemListProps {
    problems: any;
    ideaId: string;
    setModalVisible: any;
}

const ProblemListForModal = ({problems, ideaId, setModalVisible}: ProblemListProps) => {

  return (
    <FlatList
      data={problems}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <ProblemCardForModal problemId={item._id} ideaId={ideaId} setModalVisible={setModalVisible}/>
      )}
    />
  );
};

export default ProblemListForModal;
