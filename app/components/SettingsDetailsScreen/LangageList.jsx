import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";
import i18next from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";

//Function to save the configs
const saveData = async (selectedLanguage) => {
  try {
    await AsyncStorage.setItem("LANGUAGE", selectedLanguage);
    console.log("Lang saved");
  } catch (err) {
    console.log("err in saving data because: " + err);
  }
};

//Components render
const LangageList = ({ OptionList }) => {
  const option = OptionList;
  const [SelectedLang, setSelectedLang] = useState(i18next.language);
  const route = useRoute();

  console.log(route.params?.setting.label);

  useEffect(() => {
    i18next.changeLanguage(SelectedLang);
    saveData(SelectedLang);
  }, [SelectedLang]);

  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={(newValue) => setSelectedLang(newValue)}
        value={SelectedLang}
      >
        {option.map((item, index) => {
          return (
            <RadioButton.Item
              key={index}
              label={item.label}
              value={item.value}
              status={SelectedLang === item.value ? "checked" : "unchecked"}
            />
          );
        })}
      </RadioButton.Group>
    </View>
  );
};

export default LangageList;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    margin: 5,
    padding: 8,
  },
});
