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

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const RightContent = (props) => {
  return (
    <>
      {Array.length % 3 != 0 ? (
        <Badge
          style={{
            backgroundColor: "#2ecc71",
            paddingHorizontal: 10,
          }}
        >
          Near
        </Badge>
      ) : (
        <Badge style={{ paddingHorizontal: 10 }}>Far</Badge>
      )}
    </>
  );
};

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
        <View style={styles.container}>
          <View style={{ width: "auto", marginTop: 8 }}>
            {Array.from(Array(7)).map((_, index) => (
              <Card style={{ padding: 15, marginVertical: 10 }} key={index}>
                <Card.Title
                  style={{ marginVertical: 5 }}
                  title="Bucky"
                  subtitle="Card Subtitle"
                  left={LeftContent}
                  right={RightContent}
                />
                <Card.Content style={{ marginVertical: 15 }}>
                  {/* <Text variant="titleLarge">Card title</Text> */}
                  <Text variant="bodyMedium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo officiis provident minima doloribus tempore eum
                    facilis accusantium deserunt, eligendi necessitatibus
                    laborum suscipit, porro obcaecati atque. Repellat ea
                    officiis, esse illum mollitia, perspiciatis eius soluta,
                    laboriosam amet obcaecati explicabo. Illum aliquid alias
                    quas laboriosam veniam consectetur assumenda numquam
                    reiciendis eos neque? Beatae exercitationem explicabo quae
                    aspernatur eveniet, facilis, ipsa eum atque error vitae
                    dolores facere cum ad obcaecati recusandae ut veritatis
                    numquam modi ducimus cupiditate neque. Id ullam neque
                    reiciendis repudiandae? Iusto, unde? Cum quis neque possimus
                    veniam sint eos atque deleniti aspernatur, aut, animi dolore
                    reprehenderit molestiae porro eum tenetur?
                  </Text>
                </Card.Content>

                <Card.Cover
                  style={{ marginVertical: 15 }}
                  source={{ uri: "https://picsum.photos/700" }}
                />
                <Card.Actions style={{ marginTop: 15 }}>
                  <Button
                    rippleColor="#fff"
                    icon="map-search-outline"
                    mode="contained"
                  >
                    Track it!
                  </Button>
                </Card.Actions>
              </Card>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    margin: 3,
    padding: 2,
  },
});
