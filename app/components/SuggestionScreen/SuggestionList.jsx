import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import React from "react";
import SuggestionItem from "./SuggestionItem";

const suggest = [
  {
    id: "1",
    title: "Pho res",
    location: "Ankorondrano",
    street: "123 Street Raseta...",
    star: "⭐⭐⭐⭐⭐",
  },
  {
    id: "2",
    title: "Buccky",
    location: "Ambohimanandray",
    street: "123 Street Raseta...",
    star: "⭐⭐⭐",
  },
  {
    id: "3",
    title: "asdasd",
    location: "Antanimena",
    street: "123 Street Raseta...",
    star: "⭐⭐",
  },
  {
    id: "4",
    title: "sasd",
    location: "Analakely",
    street: "123 Street Raseta...",
    star: "⭐⭐⭐⭐⭐",
  },
];

const SuggestionList = () => {
  return (
    <View>
      <FlatList
        data={suggest}
        renderItem={({ item, index }) => (
          <SuggestionItem key={index} restaurant={item} />
        )}
      />
    </View>
  );
};

export default SuggestionList;

const styles = StyleSheet.create({});
