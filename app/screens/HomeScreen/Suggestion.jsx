import { StyleSheet, View } from "react-native";
import React from "react";
import SuggestionList from "../../components/SuggestionScreen/SuggestionList";
import { SearchBar } from "react-native-screens";
import { useTheme } from "react-native-paper";

export default function Suggestion() {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <SuggestionList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
    // margin: 5,
    // padding: 8,
  },
});
