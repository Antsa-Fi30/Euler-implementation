import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import Setting from "./Setting";

const SettingsMenu = [
  {
    id: "1",
    label: "languages",
    options: [],
  },
  {
    id: "2",
    label: "Preferences",
    options: [],
  },
  {
    id: "3",
    label: "Confidentiality",
    options: [],
  },
];

const Parameters = () => {
  const theme = useTheme();
  console.log(SettingsMenu);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={SettingsMenu}
        renderItem={({ item, index }) => (
          <Setting parameters={item} key={index} />
        )}
      />
    </View>
  );
};

export default Parameters;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    margin: 5,
    padding: 8,
  },
});
