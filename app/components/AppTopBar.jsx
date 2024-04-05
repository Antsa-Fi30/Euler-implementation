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

  //Modal's Portal
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    setShowBack(route.name === "Settings");

    //Limit settings pages
    if (route.name === "Settings") {
      setShowSettings(false);
    } else {
      setShowSettings(true);
    }
  }, [route]);

  return (
    <Appbar.Header dark style={styles.appbar}>
      {showBack && <Appbar.BackAction onPress={() => navigation.goBack()} />}
      <Appbar.Content title={route.name} />
      {showSettings && (
        <Appbar.Action icon="cog" onPress={() => navigation.push("Settings")} />
      )}
      <Appbar.Action
        icon="magnify"
        onPress={() => {
          showModal();
        }}
      />

      <Modal dismissable visible={visible} onDismiss={hideModal}>
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: Color.dark.primary,
  },
});
