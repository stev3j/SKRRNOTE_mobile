import React from 'react';
import { FlatList } from 'react-native';
import IdeaCard from '../idea/IdeaCard';
import { deleteProblem, getProblems } from '../../database/Functions';
import ProblemCardForModal from './ProblemCardForModal';

interface ProblemListProps {
    problems: any;
    ideaId: string;
}

const ProblemListForModal = ({problems, ideaId}: ProblemListProps) => {

  return (
    <FlatList
      data={problems}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <ProblemCardForModal problemId={item._id} ideaId={ideaId}/>
      )}
    />
  );
};

export default ProblemListForModal;
