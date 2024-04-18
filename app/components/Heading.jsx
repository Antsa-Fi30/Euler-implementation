import { StyleSheet, Text, View } from "react-native";
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
    fontFamily: "Poppins",
    fontWeight: "900",
    fontSize: 20,
  },
});
