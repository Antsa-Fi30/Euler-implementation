import { Image, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

const AlgosCard = ({ Title, Subtitle, description, uri }) => {
  return (
    <Card>
      <Card.Content>
        <View style={styles.section}>
          <Text style={styles.heading}>{Title}</Text>
          <Text style={styles.subHeading}>{Subtitle}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.text}>{description}</Text>
            <Image source={uri} style={styles.image} />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default AlgosCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    borderRadius: 5,
  },
  section: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "semi-bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins",
    lineHeight: 24,
  },
  equation: {
    fontSize: 16,
    fontStyle: "italic",
    marginVertical: 5,
  },
});
