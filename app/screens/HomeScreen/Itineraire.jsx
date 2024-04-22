import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";

const Itineraire = () => {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.container, { fontFamily: "Poppins" }]}>
        asdasdas
      </Text>
    </View>
  );
};

export default Itineraire;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    maxHeight: "100%",
  },
});
