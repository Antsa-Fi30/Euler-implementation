import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import {
  Searchbar,
  Card,
  Avatar,
  Button,
  Text,
  Badge,
} from "react-native-paper";
import CardResto from "../../components/SearchScreen/Resto";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

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
      <ScrollView>
        <CardResto />
      </ScrollView>
    </>
  );
};

export default Search;
