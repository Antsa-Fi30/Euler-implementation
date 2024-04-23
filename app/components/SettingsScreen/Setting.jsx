import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Divider, TouchableRipple, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Setting = ({ parameters }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: theme.colors.background, width: "100%" }}>
      <TouchableRipple
        style={styles.container}
        onPress={() => {
          navigation.push("Settings details", {
            setting: parameters,
          });
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text>{parameters.icon}</Text>
          <Text style={[styles.label]}>{parameters.label}</Text>
        </View>
      </TouchableRipple>
      <Divider />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins",
    marginLeft: 5,
  },
});
