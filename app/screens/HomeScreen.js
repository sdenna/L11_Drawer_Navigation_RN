import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

export default function HomeScreen() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
    {/* //   <Button title="Open Drawer" onPress={() => nav.openDrawer()} />

    //   <Button title="Close Drawer" onPress={() => nav.closeDrawer()} />

    //   <Button title="Toggle Drawer" onPress={() => nav.toggleDrawer()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
