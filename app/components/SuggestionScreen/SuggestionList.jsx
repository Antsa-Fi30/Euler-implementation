import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import React from "react";
import SuggestionItem from "./SuggestionItem";
import { Searchbar, ThemeProvider } from "react-native-paper";
import { useTheme } from "react-native-paper";

const suggest = [
  {
    id: "1",
    name: "Pho res",
    location: "Ankorondrano",
    street: "123 Street Raseta...",
    star: "⭐⭐⭐⭐⭐",
    description: "Lorem",
  },
  {
    id: "2",
    name: "Buccky",
    location: "Ambohimanandray",
    street: "123 Street Raseta...",
    star: "⭐⭐⭐",
    description: "Lorem",
  },
  {
    id: "3",
    name: "asdasd",
    location: "Antanimena",
    street: "123 Street Raseta...",
    star: "⭐⭐",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda voluptas exercitationem cum praesentium quos labore saepe. Harum quaerat incidunt suscipit dolor quibusdam mollitia dolorem sapiente distinctio esse ipsa, delectus, minus eligendi at illo consequatur adipisci. Dolores velit, suscipit laudantium voluptatibus praesentium nobis reiciendis voluptas quaerat. Laboriosam esse quae voluptas accusamus omnis. Fuga optio ducimus eligendi, exercitationem voluptas ab sint!",
  },
  {
    id: "4",
    name: "sasd",
    location: "Analakely",
    street: "123 Street Raseta...",
    star: "⭐⭐⭐⭐⭐",
    description: "Lorem",
  },
  {
    id: "5",
    name: "Blitz",
    location: "Ambohimanandray",
    street: "123 Street Raseta...",
    star: "⭐⭐⭐⭐",
    description: "Lorem",
  },
  {
    id: "6",
    name: "Bmjuhibj",
    location: "Anosisoa",
    street: "123 Street Raseta...",
    star: "⭐⭐⭐",
    description: "Lorem",
  },
];

const SuggestionList = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={suggest}
        renderItem={({ item, index }) => (
          <SuggestionItem key={index} restaurant={item} />
        )}
      />
    </View>
  );
};

export default SuggestionList;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    margin: 5,
    padding: 8,
  },
});
