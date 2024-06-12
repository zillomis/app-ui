import { AuthContext } from "../../context/AuthState";
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function IndexScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>我是登入後首頁</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050726", // 設置背景色為深紫色
    alignItems: "center",
    justifyContent: "center",
  },
});
