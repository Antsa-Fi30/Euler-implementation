import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";
import { useTranslation } from "react-i18next";

const Heading = ({ text }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t(text)}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },

  text: {
    fontFamily: "Poppins-bold",
    fontSize: 20,
  },
});
