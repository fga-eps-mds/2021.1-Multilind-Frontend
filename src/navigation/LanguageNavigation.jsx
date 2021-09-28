import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LanguageScreen,
  LanguageInitialScreen,
  DictionaryScreen,
  WordsScreen,
} from '../screens';

const Stack = createStackNavigator();

export function LanguageNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="LanguageInitial" component={LanguageInitialScreen} />
      <Stack.Screen name="Dictionary" component={DictionaryScreen} />
      <Stack.Screen name="Words" component={WordsScreen} />
    </Stack.Navigator>
  );
}
