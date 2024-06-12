import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexNavigator from "./navigation/IndexNavigator";
import LoginScreen from "./src/home/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#050726"
        translucent
      />
      <SafeAreaView style={styles.safeArea}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Index" component={IndexNavigator} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#050726",
  },
});
