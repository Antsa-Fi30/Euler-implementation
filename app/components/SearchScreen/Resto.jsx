import { StyleSheet, View } from "react-native";
import React from "react";
import CardResto from "./CardResto";

const Resto = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "auto", marginTop: 8 }}>
        {Array.from(Array(7)).map((_, index) => (
          <CardResto id={index} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Resto;

const styles = StyleSheet.create({
  container: {
    margin: 3,
    padding: 2,
  },
});
