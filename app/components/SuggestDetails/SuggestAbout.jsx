//React
import React, { useState } from "react";

//React-native
import { StyleSheet, View, TouchableOpacity } from "react-native";

// React native paper
import { Text, useTheme } from "react-native-paper";

// Components
import Heading from "../../components/Heading";

const SuggestAbout = ({ description }) => {
  const [readMore, setReadMore] = useState(false);
  const theme = useTheme();

  return (
    <View>
      <Heading text={"About"} />
      {/* The long or short text goes here */}
      <Text
        style={{
          lineHeight: 25,
          fontSize: 16,
          fontFamily: "Poppins-medium",
        }}
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
        <Text
          style={{
            color: theme.colors.tertiary,
            fontSize: 16,
            fontFamily: "Poppins",
          }}
        >
          {readMore ? "Close" : "Read More"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestAbout;

const styles = StyleSheet.create({});
