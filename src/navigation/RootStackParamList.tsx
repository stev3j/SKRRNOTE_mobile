type RootStackParamList = {
  Home: undefined;
  ProblemDetail: {id: string} | undefined;
  // IdeaDetail: {problemId: string, id: string} | {id: string} | undefined;
  IdeaDetail: { id: string} | undefined;
};

export default RootStackParamList