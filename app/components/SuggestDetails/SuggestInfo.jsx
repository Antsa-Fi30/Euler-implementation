import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";

const SuggestInfo = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontFamily: "Poppins",
            color: Colors.dark.primary,
            fontSize: 23,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="restaurant-sharp"
            size={25}
            style={{ marginRight: 5 }}
            color={Colors.dark.primary}
          />
          PhoResto
        </Text>
      </View>
      <View style={styles.subContainer}>
        <Text
          style={{
            fontFamily: "Poppins",
            color: Colors.light.primary,
            fontSize: 16,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="locate-outline"
            size={25}
            color={Colors.dark.primary}
          />
          <Text>Ankorondrano</Text>
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            color: "#d3d3d",
            fontSize: 14,
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="location-sharp"
            size={25}
            style={{ marginRight: 5 }}
            color={Colors.dark.primary}
          />
          Rue 123 Dr Raseta Antananarivo
        </Text>
      </View>
    </View>
  );
};

export default SuggestInfo;

const styles = StyleSheet.create({
  subContainer: {
    display: "flex",
    gap: 10,
  },
});
