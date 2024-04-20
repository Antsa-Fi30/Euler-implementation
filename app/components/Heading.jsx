import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";

const Heading = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },

  text: {
    fontFamily: "Poppins-bold",
    fontSize: 20,
  },
});
