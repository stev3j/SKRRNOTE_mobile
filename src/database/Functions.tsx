import realm from "./realm";
import { ObjectId } from "bson";

export const createProblem = (title: string, description: string) => {
  realm.write(() => {
    realm.create("Problem", {
      _id: new ObjectId(),
      title,
      description,
    });
  });
};

export const createIdea = (title: string, description: string) => {
  realm.write(() => {
    realm.create("Idea", {
      _id: new ObjectId(),
      title,
      description,
    });
  });
};

export const updateProblem = (id: string, title: string, description: string) => {
  realm.write(() => {
    let problem = realm.objectForPrimaryKey("Problem", new ObjectId(id));
    if (problem) {
      problem.title = title;
      problem.description = description;
    }
  });
};

export const updateIdea = (id: string, title: string, description: string) => {
  realm.write(() => {
    let idea = realm.objectForPrimaryKey("Idea", new ObjectId(id));
    if (idea) {
      idea.title = title;
      idea.description = description;
    }
  });
};

export const deleteProblem = (id: string) => {
  realm.write(() => {
    let problem = realm.objectForPrimaryKey("Problem", new ObjectId(id));
    if (problem) {
      realm.delete(problem);
    }
  });
};

export const deleteIdea = (id: string) => {
  realm.write(() => {
    let idea = realm.objectForPrimaryKey("Idea", new ObjectId(id));
    if (idea) {
      realm.delete(idea);
    }
  });
};


export const getProblems = () => {
  return realm.objects("Problem");
};

export const getIdeas = () => {
  return realm.objects("Idea");
};