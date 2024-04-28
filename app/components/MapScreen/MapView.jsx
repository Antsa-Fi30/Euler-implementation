import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const MapView = () => {
  return (
    <View style={styles.container}>
      <Text>Map View</Text>
    </View>
  );
};

export default MapView;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    marginTop: 20,
  },
});
