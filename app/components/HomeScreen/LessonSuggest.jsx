import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

const LessonSuggest = ({ title, description }) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};

export default LessonSuggest;

const styles = StyleSheet.create({});
