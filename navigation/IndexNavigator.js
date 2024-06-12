import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, View } from "react-native";
import IndexScreen from "../src/home/HomePage";
import ExploreScreen from "../src/home/ExploreScreen";
import MemberScreen from "../src/home/MemberScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function IndexNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => (
          <View style={{ marginRight: 16 }}>
            <Button
              title="liked"
              onPress={() => {
                // 在這裡添加按鈕點擊事件的處理邏輯
              }}
              color="#fff"
            />
          </View>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Member") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: "#050726",
          borderBlockColor: "#050726",
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#050726",
          borderBottomWidth: 0,
        },
      })}
    >
      <Tab.Screen name="Home" component={IndexScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Member" component={MemberScreen} />
    </Tab.Navigator>
  );
}
