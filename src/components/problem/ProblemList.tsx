import React from 'react';
import { FlatList } from 'react-native';
import IdeaCard from '../idea/IdeaCard';
import ProblemCard from './ProblemCard';
import { deleteProblem, getProblems } from '../../database/Functions';

interface ProblemListProps {
    problems: any;
    setProblems: any;
}

const ProblemList = ({problems, setProblems}: ProblemListProps) => {

  return (
    <FlatList
      data={problems}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <ProblemCard id={item._id} onDelete={() => {
          deleteProblem(item._id);
          setProblems(getProblems());
        }}
      />
      )}
    />
  );
};

export default ProblemList;
