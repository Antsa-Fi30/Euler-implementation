import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import React from "react";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settingss</Text>

      <StatusBar style="auto" />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    margin: 20,
  },
});
