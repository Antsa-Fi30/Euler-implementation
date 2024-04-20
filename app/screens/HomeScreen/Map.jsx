import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

export default function Map() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={styles.title}>Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "primary",
  },
});
