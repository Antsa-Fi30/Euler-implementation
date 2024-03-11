import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <button onPress={() => console.log("hello world")}>Click Me</button>
    </View>
  );
};

export default HomeScreen;
