import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import {
  Searchbar,
  Card,
  Avatar,
  Button,
  Text,
  Badge,
  useTheme,
} from "react-native-paper";
import CardResto from "../../components/SearchScreen/Resto";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const theme = useTheme();

  return (
    <>
      <Card style={{ padding: 7, borderRadius: 0 }}>
        <Card.Content>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </Card.Content>
      </Card>
      <ScrollView
        style={[
          styles.ListContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <CardResto />
      </ScrollView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  ListContainer: {
    color: "#fff",
  },
});
