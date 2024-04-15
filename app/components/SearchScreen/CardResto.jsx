import { StyleSheet, View } from "react-native";
import { Card, Avatar, Button, Text, Badge } from "react-native-paper";
import React from "react";

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

const CardResto = ({ id }) => {
  return (
    <Card style={{ padding: 15, marginVertical: 10 }} key={id}>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          officiis provident minima doloribus tempore eum facilis accusantium
          deserunt, eligendi necessitatibus laborum suscipit, porro obcaecati
          atque. Repellat ea officiis, esse illum mollitia, perspiciatis eius
          soluta, laboriosam amet obcaecati explicabo. Illum aliquid alias quas
          laboriosam veniam consectetur assumenda numquam reiciendis eos neque?
        </Text>
      </Card.Content>

      <Card.Cover
        style={{ marginVertical: 15 }}
        source={{ uri: "../../../assets/4.jpg" }}
      />
      <View style={{ marginTop: 15 }}>
        <Button
          icon="map-search-outline"
          mode="contained"
          onPress={() => {
            console.log("Tracking...");
          }}
        >
          Track it!
        </Button>
      </View>
    </Card>
  );
};

export default CardResto;

const styles = StyleSheet.create({});
