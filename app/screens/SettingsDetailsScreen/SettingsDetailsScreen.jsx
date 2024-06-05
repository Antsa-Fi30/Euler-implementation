import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import React from "react";
//React-navigation's element(s)
import { useRoute } from "@react-navigation/native";
import LangageList from "../../components/SettingsDetailsScreen/LangageList";
import PreferenceList from "../../components/SettingsDetailsScreen/PreferenceList";

const SettingsDetailsScreen = () => {
  const theme = useTheme();

  const param = useRoute().params;
  const option = param.setting?.options;
  const type = param.setting?.type;

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {type === "lang" && <LangageList OptionList={option} />}
      {type === "pref" && <PreferenceList OptionList={option} />}
    </View>
  );
};

export default SettingsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    maxHeight: "100%",
  },
});
