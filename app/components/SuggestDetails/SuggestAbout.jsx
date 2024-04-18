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
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import Heading from "../../components/Heading";

const SuggestAbout = () => {
  const [readMore, setReadMore] = useState(false);
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quisquam inventore! Cumque tempore odio non pariatur commodi impedit ut harum nisi, asperiores placeat, illum unde, hic esse? Vel eius perspiciatis autem, voluptatum culpa ullam impedit fuga, dolorum, totam dolorem tempore. Necessitatibus cumque doloremque consequatur mollitia eum, est, facilis nihil, aliquam exercitationem iusto obcaecati consectetur placeat aut sit ratione perferendis. Culpa nemo asperiores consequuntur ipsum maiores! Est architecto ea dolores explicabo modi beatae iste officiis repellat fugit totam quo, accusamus, iure sed similique. Voluptates libero, ipsam sapiente esse nesciunt animi, laborum ad distinctio quam eveniet quae consectetur, ut aliquid minus enim!";

  return (
    <View>
      <Heading text={"About"} />
      {/* The long or short text goes here */}
      <Text
        style={{ lineHeight: 25, fontSize: 16 }}
        numberOfLines={readMore ? 500 : 5}
      >
        {description}
      </Text>

      {/* This is a kind of button that hide the text when it's very long */}
      <TouchableOpacity
        onPress={() => {
          setReadMore(!readMore);
        }}
      >
        <Text style={{ color: Colors.light.primary, fontSize: 16 }}>
          {readMore ? "Close" : "Read More"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestAbout;

const styles = StyleSheet.create({});
