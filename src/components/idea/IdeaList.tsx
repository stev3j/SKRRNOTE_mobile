import React from 'react';
import { FlatList } from 'react-native';
import IdeaCard from './IdeaCard';
import Idea from '../../database/models/Idea';
import { deleteIdea, getIdeas } from '../../database/Functions';
// import Idea from '../database/models/Idea';


interface IdeaListProps {
    ideas: any;
    setIdeas: any;
}

const IdeaList = ({ideas, setIdeas}: IdeaListProps) => {

  return (
    <FlatList
      data={ideas}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <IdeaCard id={item._id} onDelete={() => {
          deleteIdea(item._id);
          setIdeas(getIdeas());
        }}
      />
      )}
    />
  );
};

export default IdeaList;
