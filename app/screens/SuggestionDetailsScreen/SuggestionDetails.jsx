import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import React, { useState } from "react";
import SuggestInfo from "../../components/SuggestDetails/SuggestInfo";
import SuggestAbout from "../../components/SuggestDetails/SuggestAbout";
import SuggestPhoto from "../../components/SuggestDetails/SuggestPhoto";

const SuggestionDetails = () => {
  return (
    <View>
      <ScrollView style={{ height: "93%" }}>
        <Image
          source={require("../../../assets/4.jpg")}
          style={{ width: "100%", height: 200 }}
        />

        {/* INFORMATIONS */}
        <View style={styles.container}>
          <SuggestInfo />

          {/* Line divider */}
          <View
            style={{
              borderWidth: 0.4,
              borderColor: "#ddd",
              marginTop: 20,
              marginBottom: 10,
            }}
          />

          {/* Description */}
          <View>
            {/* About Section */}
            <SuggestAbout />
            {/* Line divider */}
            <View
              style={{
                borderWidth: 0.4,
                borderColor: "#ddd",
                marginTop: 20,
                marginBottom: 10,
              }}
            />
            {/* If there is some photos of the restaurant, It would be here */}
            <SuggestPhoto />
          </View>
        </View>
      </ScrollView>
      <View>
        <Button
          icon="map-search-outline"
          mode="contained"
          style={{ borderRadius: 0 }}
          onPress={() => {
            console.log("Tracking...");
          }}
        >
          Track it!
        </Button>
      </View>
    </View>
  );
};

export default SuggestionDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 4,
  },
});
