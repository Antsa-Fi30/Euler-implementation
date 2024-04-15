import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import SuggestionList from "../../components/SuggestionScreen/SuggestionList";

export default class Suggestion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SuggestionList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "center",
    textAlign: "center",
  },
});
