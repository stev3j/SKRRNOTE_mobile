import React from 'react';
import { FlatList } from 'react-native';
import IdeaCard from './IdeaCard';
import ProblemCard from './ProblemCard';
import { deleteProblem, getProblems } from '../database/Functions';

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
        <ProblemCard title={item.title} content={item.description} onDelete={() => {
          deleteProblem(item._id);
          setProblems(getProblems());
        }}
      />
      )}
    />
  );
};

export default ProblemList;
