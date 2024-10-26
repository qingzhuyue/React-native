/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-07-05 13:49:44
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-10-26 20:03:45
 * @FilePath: /RN/src/views/home/Home.tsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import * as React from 'react';
import { View, Text } from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text style={{color:"red"}}>这一个 RN 应用</Text>
    </View>
  );
}


export default HomeScreen;