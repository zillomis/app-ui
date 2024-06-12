import { Text, View, Button } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MemberCenterStack({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Member Center</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function ProfileStack({ navigation }) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function MemberScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Member Center" component={MemberCenterStack} />
      <Stack.Screen name="Profile" component={ProfileStack} />
    </Stack.Navigator>
  );
}
