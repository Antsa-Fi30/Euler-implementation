import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";

const LangageList = ({ OptionList }) => {
  const [value, setValue] = useState("fr");

  const option = OptionList;
  return (
    <View style={styles.container}>
      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        {option.map((item, index) => {
          return (
            <RadioButton.Item
              key={index}
              label={item.label}
              value={item.value}
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
