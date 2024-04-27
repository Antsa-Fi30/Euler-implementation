//React components
import React, { useEffect, useState } from "react";

//React native's elements
import { StyleSheet, Image, View, ScrollView } from "react-native";

//React-navigation's element(s)
import { useRoute } from "@react-navigation/native";

//React-native-paper components
import { Button, Text, useTheme } from "react-native-paper";

//Local components
import SuggestInfo from "../../components/SuggestDetails/SuggestInfo";
import SuggestAbout from "../../components/SuggestDetails/SuggestAbout";
import SuggestPhoto from "../../components/SuggestDetails/SuggestPhoto";
import { useTranslation } from "react-i18next";

const SuggestionDetails = () => {
  const placeholder = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quisquam inventore! Cumque tempore odio non pariatur commodi impedit ut harum nisi, asperiores placeat, illum unde, hic esse? Vel eius perspiciatis autem, voluptatum culpa ullam impedit fuga, dolorum, totam dolorem tempore. Necessitatibus cumque doloremque consequatur mollitia eum, est, facilis nihil, aliquam exercitationem iusto obcaecati consectetur placeat aut sit ratione perferendis. Culpa nemo asperiores consequuntur ipsum maiores! Est architecto ea dolores explicabo modi beatae iste officiis repellat fugit totam quo, accusamus, iure sed similique. Voluptates libero, ipsam sapiente esse nesciunt animi, laborum ad distinctio quam eveniet quae consectetur, ut aliquid minus enim!",
    },
  ];
  const param = useRoute().params;
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <ScrollView style={{ height: "93%" }}>
        <Image
          source={require("../../../assets/4.jpg")}
          style={{ width: "100%", height: 200 }}
        />

        {/* INFORMATIONS */}
        <View style={styles.container}>
          <SuggestInfo
            name={param?.restaurant.name}
            region={param?.restaurant.location}
            location={param?.restaurant.street}
            star={param?.restaurant.star}
          />

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
            <SuggestAbout description={param.restaurant.description} />
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
      <View style={styles.buttons}>
        <Button
          icon="map-search-outline"
          mode="outlined"
          style={{}}
          onPress={() => {
            console.log("Tracking...");
          }}
        >
          {t("btn_save")}
        </Button>
        <Button
          icon="map-search-outline"
          mode="contained-tonal"
          onPress={() => {
            console.log("Tracking...");
          }}
        >
          {t("btn_find")}
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
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    marginHorizontal: 20,
  },
});
