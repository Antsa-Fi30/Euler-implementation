import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Colors from "../../utils/Colors";

const SuggestBox = ({ title, thumbnailUri, description }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnailUri }} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.info}>
        <Button
          icon="routes"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Look for it
        </Button>
      </View>
    </View>
  );
};

export default SuggestBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: "20px",
    alignItems: "center",
    padding: 20,
    marginTop: 10,

    backgroundColor: Colors.light.primary,
  },
  thumbnail: {
    width: 100,
    height: 60,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
});
