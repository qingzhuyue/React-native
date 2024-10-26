/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-10-26 21:57:19
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-10-26 23:56:43
 * @FilePath: /RN/src/views/Login/Login.tsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */

import React, { useState } from "react";
import { Text, Button, TextInput, View } from "react-native";
import { LoginStyle } from "./Style";


function Login() {
  const [username, setUserName] = useState<string>();
  const [password, setPassWord] = useState<string>();

  const handleLogin = () => {
    console.log("用户和密码", username, password)
  }
  return <View style={LoginStyle.container}>
    <Text style={LoginStyle.title}>登录</Text>

    <TextInput
      placeholder="用户名"
      value={username}
      style={LoginStyle.input}
      onChangeText={setUserName} />
    <TextInput
      placeholder="密码"
      value={password}
      keyboardType="web-search"
      onChangeText={setPassWord}
      secureTextEntry={true}
      style={LoginStyle.input} />
    <Button
      title="登录"
      onPress={handleLogin}
      {...LoginStyle.button} />
  </View>
}

export default Login;