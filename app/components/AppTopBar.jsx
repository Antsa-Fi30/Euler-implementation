import React, { useState, useEffect } from "react";

//React Native components
import { StyleSheet } from "react-native";

//React Navigation
import { useNavigation, useRoute } from "@react-navigation/native";

//react-native paper
import { Appbar } from "react-native-paper";
import { Modal, Portal, Text, PaperProvider } from "react-native-paper";

//Personnalizable Color
import Color from "../utils/Colors";

export default function AppTopBar() {
  const [showBack, setShowBack] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    setShowBack(
      route.name === "Settings" || route.name === "Suggestion details"
    );

    //Limit settings pages
    if (route.name === "Settings" || route.name === "Suggestion details") {
      setShowSettings(false);
    } else {
      setShowSettings(true);
    }
  }, [route]);

  return (
    <Appbar.Header style={styles.appbar}>
      {showBack && <Appbar.BackAction onPress={() => navigation.goBack()} />}
      <Appbar.Content title={route.name} />
      {showSettings && (
        <Appbar.Action icon="cog" onPress={() => navigation.push("Settings")} />
      )}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appbar: {
    color: "#000",
    padding: 10,
    paddingVertical: 14,
    backgroundColor: "transparent",
  },
});
