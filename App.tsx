/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-06-20 20:11:31
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-10-26 22:04:41
 * @FilePath: /RN/App.tsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/views/home/Home';
import LoginScreen from "./src/views/Login/Login"

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
          {/* <Stack.Screen name=" " component={HomeScreen} /> */}
          <Stack.Screen name=" " component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
