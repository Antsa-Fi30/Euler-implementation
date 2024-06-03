import { View, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";

const AlertBar = ({ close, open, errorMessage, retry }) => {
  return (
    <View style={styles.container}>
      <Snackbar
        visible={open}
        onDismiss={close}
        duration={3000}
        action={{
          label: "Retry",
          onPress: retry,
        }}
      >
        {errorMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default AlertBar;
