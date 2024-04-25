import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

import ThemeSwitcher from "./ThemeSwitcher";

const PreferenceList = ({}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ThemeSwitcher />
    </View>
  );
};

export default PreferenceList;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
