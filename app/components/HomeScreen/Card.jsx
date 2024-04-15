import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View>
      <Text style={styles.card}>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(166, 159, 159, 0.5)",
    shadowColor: "rgba(31, 38, 135, 0.37)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",
  },
});
