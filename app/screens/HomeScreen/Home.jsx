import { StyleSheet, Dimensions, View, ScrollView } from "react-native";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { LineChart } from "react-native-chart-kit";
import { eulerMethod } from "../../constants/Euler";

const Home = () => {
  const { t } = useTranslation();
  //Etats du composants
  const [T_initial, setT_initial] = useState("");
  const [T_ambient, setT_ambient] = useState("");
  const [k, setK] = useState(0.1);
  const [dt] = useState(5);
  const [time_period, setTime_period] = useState("");
  const [simulationData, setSimulationData] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    if (!T_initial) newErrors.T_initial = t("This field is required");
    if (!T_ambient) newErrors.T_ambient = t("This field is required");
    if (!k) newErrors.k = t("This field is required");
    if (!dt) newErrors.dt = t("This field is required");
    if (!time_period) newErrors.time_period = t("This field is required");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const simulateCooling = async () => {
    if (!validateInputs()) {
      return;
    }

    const { t_values, T_values } = eulerMethod(
      parseFloat(T_initial),
      parseFloat(T_ambient),
      parseFloat(k),
      parseFloat(dt),
      parseFloat(time_period)
    );

    setSimulationData({ times: t_values, temperatures: T_values });
  };

  const handlingInputValid = (value, setter, min = null, max = null) => {
    let validInput = value.replace(/[^0-9.]/g, "");

    if ((validInput, min !== null && max !== null)) {
      const n = parseFloat(validInput);
      if (n > max) validInput = max.toString();
    }
    setter(validInput);
  };

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          label={t("Initial Temperature")}
          value={T_initial}
          onChangeText={(value) => handlingInputValid(value, setT_initial)}
          keyboardType="numeric"
          style={styles.input}
          error={!!errors.T_initial}
        />
        {errors.T_initial && (
          <Text style={styles.errorText}>{errors.T_initial}</Text>
        )}

        <TextInput
          label={t("Ambient Temperature")}
          value={T_ambient}
          onChangeText={(value) => handlingInputValid(value, setT_ambient)}
          keyboardType="numeric"
          style={styles.input}
          error={!!errors.T_ambient}
        />
        {errors.T_ambient && (
          <Text style={styles.errorText}>{errors.T_ambient}</Text>
        )}

        <TextInput
          label={t("Cooling Coefficient (must be between 0 and 1)")}
          value={k}
          onChangeText={(value) => handlingInputValid(value, setK, 0.1, 1)}
          keyboardType="numeric"
          style={styles.input}
          error={!!errors.k}
        />
        {errors.k && <Text style={styles.errorText}>{errors.k}</Text>}

        <TextInput
          label={t("Time Period in minutes")}
          value={time_period}
          onChangeText={(value) => handlingInputValid(value, setTime_period)}
          keyboardType="numeric"
          style={styles.input}
          error={!!errors.time_period}
        />
        {errors.time_period && (
          <Text style={styles.errorText}>{errors.time_period}</Text>
        )}

        <Button mode="contained-tonal" onPress={simulateCooling}>
          {t("btn_refr")}
        </Button>
      </View>
      <View style={styles.container}>
        {simulationData && (
          <View style={{ marginVertical: 10 }}>
            <LineChart
              data={{
                labels: simulationData.times.map((t) => t.toFixed(0)),
                datasets: [
                  {
                    data: simulationData.temperatures,
                  },
                ],
              }}
              width={Dimensions.get("window").width - 30} // from react-native
              height={250}
              xAxisSuffix="mn"
              yAxisSuffix="°C"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
                padding: 10,
              }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  svgContainer: {
    paddingVertical: 20,
    marginTop: 15,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginVertical: 10,
  },
  input: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});

export default Home;
