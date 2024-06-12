import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
  Switch,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useContext } from "react";
import { AuthContext } from "/Users/louisyang/Desktop/zillomis-workspace/app-ui/context/AuthState";

export default function LoginScreen({ navigation }) {
  //   const { onAuthentication } = useContext(AuthContext);
  let userObject = {
    username: "",
    password: "",
    rememberMe: false,
  };

  const [loginInfo, setLoginInfo] = useState(userObject);

  function onLogin() {
    if (loginInfo.username === "" || loginInfo.password == "") {
      Alert.alert("test");
      return false;
    } else {
      navigation.navigate("Index");
    }
  }

  return (
    <ScrollView className="flex-1" style={styles.container}>
      <View className="items-center justify-top">
        <Image
          source={require("../../img/logo.png")}
          resizeMode="contain"
          style={styles.logo}
          className="mt-10"
        />

        {/* <Text className="font-bold text-white text-4xl my-6">zillomis</Text> */}

        <View className="my-3 w-10/12">
          <TextInput
            style={styles.textInput}
            value={loginInfo.username}
            onChangeText={(text) =>
              setLoginInfo({ ...loginInfo, username: text })
            }
            placeholder={"請輸入電子郵件"}
            className="px-3 py-2 border border-blue-300 rounded-md bg-blue-50"
          />
        </View>

        <View className="my-3 w-10/12">
          <TextInput
            style={styles.textInput}
            value={loginInfo.password}
            onChangeText={(text) => {
              setLoginInfo({ ...loginInfo, password: text });
            }}
            placeholder={"請輸入密碼"}
            secureTextEntry={true}
            className="px-3 py-2 border border-blue-300 rounded-md bg-blue-50"
          />
        </View>

        <TouchableOpacity
          className="bg-indigo-700 rounded-lg my-3 w-10/12 items-center justify-center"
          onPress={onLogin}
        >
          <Text className="text-white text-xl px-5 py-3 ">登入</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050726",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginBottom: 30,
  },
  textInput: {
    height: 45,
  },
});
