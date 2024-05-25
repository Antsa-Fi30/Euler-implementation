import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";

const LessonSuggest = ({ title, description }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.cardTouch,
        { backgroundColor: theme.colors.primaryContainer },
      ]}
    >
      <Text style={{ fontFamily: "Poppins", fontSize: 17 }}>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};

export default LessonSuggest;

const styles = StyleSheet.create({
  cardTouch: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: 10,
    borderRadius: 15,
    gap: 5,
  },
});
