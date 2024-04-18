import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SuggestionItem = ({ restaurant }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("Suggestion details");
      }}
      style={styles.container}
    >
      <Image source={require("../../../assets/4.jpg")} style={styles.image} />

      <View style={styles.SubContainer}>
        <Text
          style={{
            color: Colors.dark.primary,
            fontWeight: "600",
            fontSize: 13,
          }}
        >
          {restaurant.title}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "900" }}>
          {restaurant.location}
        </Text>
        <Text style={{ color: "#ddd", fontSize: 14 }}>
          <Ionicons
            name="location-sharp"
            size={20}
            color={Colors.light.primary}
          />
          {restaurant.street}
        </Text>
        <Text>{restaurant.star}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SuggestionItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  SubContainer: {
    display: "flex",
    gap: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
