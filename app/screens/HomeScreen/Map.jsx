import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useTheme } from "react-native-paper";
import SearchBar from "../../components/MapScreen/SearchBar";
import MapView from "../../components/MapScreen/MapView";

export default function Map() {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        { padding: 10, backgroundColor: theme.colors.background },
      ]}
    >
      <SearchBar />
      <MapView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    maxHeight: "100%",
  },
});
