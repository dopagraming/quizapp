import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/HomePage';
import AllTheQustionsPage from '../pages/AllTheQustionsPage';
import QuizPage from '../pages/QuizPage'
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="דף הבית"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllTheQustionsPage"
          component={AllTheQustionsPage}
          options={{
            headerTitle: "כל השאלות",
            headerTitleAlign: "center",
            headerTitleStyle: {
              // fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#EFF0F3",
            },
          }}
        />
        <Stack.Screen
          name="QuizPage"
          component={QuizPage}
          options={{
            headerTitle: "מבחן 55 שאלה (מה״ט)",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#EFF0F3",
            },
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
