import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class Suggestion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Suggestion</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: "center",
    textAlign: "center",
  },
});
