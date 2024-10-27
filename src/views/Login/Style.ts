/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-10-26 22:00:33
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-10-27 23:45:44
 * @FilePath: /RN/src/views/Login/Style.ts
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { StyleSheet } from "react-native";


export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    borderRadius: 10,
    marginTop:20
  }
})