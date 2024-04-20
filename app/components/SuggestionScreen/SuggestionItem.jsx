import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme, Text } from "react-native-paper";

const SuggestionItem = ({ restaurant }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("Suggestion details", {
          restaurant: restaurant,
        });
      }}
      style={[
        styles.container,
        { backgroundColor: theme.colors.elevation.level2 },
      ]}
    >
      <Image source={require("../../../assets/4.jpg")} style={styles.image} />

      <View style={styles.subContainer}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 13,
            fontFamily: "Poppins-medium",
          }}
        >
          {restaurant.name}
        </Text>
        <Text style={{ fontSize: 15, fontFamily: "Poppins-medium" }}>
          {restaurant.location}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            color={theme.colors.primary}
            name="location-sharp"
            size={20}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              marginLeft: 5,
            }}
          >
            {restaurant.street}
          </Text>
        </View>
        <Text>{restaurant.star}</Text>
      </View>
      <Ionicons style={styles.icone} name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

export default SuggestionItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    gap: 13,
  },
  subContainer: {
    display: "flex",
    gap: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  icone: {
    right: 0,
  },
});
