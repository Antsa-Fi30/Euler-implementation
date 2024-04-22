import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Searchbar, useTheme } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
});
