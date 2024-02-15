import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./app/screens/HomeScreen";
import SettingsScreen from "./app/screens/SettingsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import InfoScreen from "./app/screens/InfoScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: "front",
          drawerPosition: "left",
          swipeEdgeWidth: 500,
          drawerHideStatusBarOnOpen: true,
          headerShown: false,

          drawerStyle: {
            backgroundColor: "#c6cbef",
            width: 240,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <FontAwesome name="home" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: () => (
              <FontAwesome name="gear" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Account"
          component={AccountScreen}
          options={{
            drawerIcon: () => (
              <FontAwesome name="user" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Information"
          component={InfoScreen}
          options={{
            drawerIcon: () => (
              <FontAwesome name="info-circle" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
