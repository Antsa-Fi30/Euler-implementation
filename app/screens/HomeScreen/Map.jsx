import { StyleSheet, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -18.87019,
          longitude: 47.507905,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Color.light.primary,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
