type RootStackParamList = {
  Home: undefined;
  ProblemDetail: {title: string, content: string} | undefined;
  IdeaDetail: {problemTitle: string} | {title: string, content: string} | undefined;
};

export default RootStackParamList