import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProblemDetailScreen from './src/screens/ProblemDetailScreen';
import RootStackParamList from './src/navigation/RootStackParamList';
import IdeaDetailScreen from './src/screens/IdeaDetailScreen';
import 'react-native-get-random-values' // cuase : BSON: For React Native please polyfill crypto.getRandomValues


const App = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProblemDetail" component={ProblemDetailScreen} />
        <Stack.Screen name="IdeaDetail" component={IdeaDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;