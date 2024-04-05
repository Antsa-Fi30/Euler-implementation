import React, { useState, useEffect } from "react";

//React Native components
import { StyleSheet } from "react-native";

//React Navigation
import { useNavigation, useRoute } from "@react-navigation/native";

import { Appbar } from "react-native-paper";
import Color from "../utils/Colors";

export default function AppTopBar() {
  const [showBack, setShowBack] = useState(false);
  //   const [showSettings, setShowSettings] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    setShowBack(route.name === "Settings");
  }, [route]);

  return (
    <Appbar.Header dark style={styles.appbar}>
      {showBack && <Appbar.BackAction onPress={() => navigation.goBack()} />}
      <Appbar.Content title={route.name} />
      <Appbar.Action icon="cog" onPress={() => navigation.push("Settings")} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: Color.dark.primary,
  },
});
