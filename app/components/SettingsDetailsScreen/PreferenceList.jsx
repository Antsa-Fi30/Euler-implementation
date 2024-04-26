import { StyleSheet, View } from "react-native";
import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Switcher from "./Switcher";
import { useTranslation } from "react-i18next";

const PreferenceList = ({ OptionList }) => {
  const option = OptionList;
  const { toggleTheme, isThemeDark } = React.useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {option.map((item, index) => {
        return (
          <Switcher
            key={index}
            label={t(item.label)}
            value={isThemeDark}
            update={toggleTheme}
          />
        );
      })}
    </View>
  );
};

export default PreferenceList;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
