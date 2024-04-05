import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../utils/Colors";

export default function Map() {
  return (
    <View>
      <Text style={styles.title}>Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Color.light.primary,
  },
});
