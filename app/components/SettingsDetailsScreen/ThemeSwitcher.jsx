import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Switch, Divider, useTheme } from "react-native-paper";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(ThemeContext);

  return (
    <View>
      <View style={styles.list}>
        <Text>Theme Sombre</Text>
        <Switch
          color={theme?.colors.primary}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </View>
      <Divider />
    </View>
  );
};

export default ThemeSwitcher;

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
