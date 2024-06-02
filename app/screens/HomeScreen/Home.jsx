import {
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";
import axios from "axios";
import { Button, Text, TextInput } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { LineChart } from "react-native-chart-kit";

const Home = () => {
  const { t } = useTranslation();
  const [T_initial, setT_initial] = useState("");
  const [T_ambient, setT_ambient] = useState("");
  const [k, setK] = useState("");
  const [dt, setDt] = useState(5);
  const [time_period, setTime_period] = useState("");
  const [simulationData, setSimulationData] = useState(null);
  const [loading, setLoading] = useState(false);
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

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/simulate", {
        T_initial: parseFloat(T_initial),
        T_ambient: parseFloat(T_ambient),
        k: parseFloat(k),
        dt: parseFloat(dt),
        time_period: parseFloat(time_period),
      });
      setSimulationData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          label={t("Initial Temperature")}
          value={T_initial}
          onChangeText={setT_initial}
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
          onChangeText={setT_ambient}
          keyboardType="numeric"
          style={styles.input}
          error={!!errors.T_ambient}
        />
        {errors.T_ambient && (
          <Text style={styles.errorText}>{errors.T_ambient}</Text>
        )}

        <TextInput
          label={t("Cooling Coefficient")}
          value={k}
          onChangeText={setK}
          keyboardType="numeric"
          style={styles.input}
          error={!!errors.k}
        />
        {errors.k && <Text style={styles.errorText}>{errors.k}</Text>}

        <TextInput
          label={t("Time Period")}
          value={time_period}
          onChangeText={setTime_period}
          keyboardType="numeric"
          style={styles.input}
          error={!!errors.time_period}
        />
        {errors.time_period && (
          <Text style={styles.errorText}>{errors.time_period}</Text>
        )}
        <Button mode="contained" onPress={simulateCooling}>
          {t("btn_refr")}
        </Button>
      </View>
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {simulationData && (
          <View style={{ marginVertical: 20 }}>
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
              height={220}
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
    </>
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
