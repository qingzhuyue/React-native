/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-10-26 22:00:33
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-10-26 23:57:45
 * @FilePath: /RN/src/views/Login/Style.ts
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { StyleSheet } from "react-native";


export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    width: '80%',
    borderRadius: 10,
    borderWidth:1
  }
})