import { StyleSheet, Text, View } from "react-native";
import React from "react";
<<<<<<< HEAD
import Color from "../../utils/Colors";
import MapView from "react-native-maps";
=======
>>>>>>> 25df33749bb9973243b416e606ea0f4a287ebde2

const Map = () => {
  return (
    <View>
<<<<<<< HEAD
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -18.87019,
          longitude: 47.507905,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
=======
      <Text>Map</Text>
>>>>>>> 25df33749bb9973243b416e606ea0f4a287ebde2
    </View>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  title: {
    color: Color.light.primary,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
=======
export default Map;

const styles = StyleSheet.create({});
>>>>>>> 25df33749bb9973243b416e606ea0f4a287ebde2
