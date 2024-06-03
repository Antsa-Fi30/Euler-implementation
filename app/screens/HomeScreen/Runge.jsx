import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import { rungeMethod } from "../../constants/Runge-Kutta";
import { useTranslation } from "react-i18next";

const Runge = () => {
  const { t } = useTranslation();

  const [x0, setX0] = useState("0");
  const [v0, setV0] = useState("50");
  const [k, setK] = useState("0.1");
  const [dt, setDt] = useState("0.1");
  const [timeSteps, setTimeSteps] = useState("100");
  const [simulationData, setSimulationData] = useState(null);
  const [errors, setErrors] = useState({});

  const a = (t, x, v) => -parseFloat(k) * v;

  const validateInputs = () => {
    const newErrors = {};

    if (!x0) newErrors.x0 = t("This field is required");
    if (!v0) newErrors.v0 = t("This field is required");
    if (!k) newErrors.k = t("This field is required");
    if (!dt) newErrors.dt = t("This field is required");
    if (!timeSteps) newErrors.timeSteps = t("This field is required");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const simulate = () => {
    if (!validateInputs()) {
      return;
    }

    const data = rungeMethod(
      parseFloat(x0),
      parseFloat(v0),
      a,
      parseFloat(dt),
      parseInt(timeSteps)
    );
    setSimulationData(data);
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
    <View style={styles.container}>
      <TextInput
        label={t("init_pos")}
        value={x0}
        onChangeText={(value) => handlingInputValid(value, setX0)}
        keyboardType="numeric"
        style={styles.input}
        error={!!errors.x0}
      />
      {errors.timeSteps && <Text style={styles.x0}>{errors.x0}</Text>}
      <TextInput
        label={t("init_v")}
        value={v0}
        onChangeText={(value) => handlingInputValid(value, setV0)}
        keyboardType="numeric"
        style={styles.input}
        error={!!errors.v0}
      />
      {errors.timeSteps && <Text style={styles.v0}>{errors.v0}</Text>}
      <TextInput
        label={t("damp_co")}
        value={k}
        onChangeText={(value) => handlingInputValid(value, setK)}
        keyboardType="numeric"
        style={styles.input}
        error={!!errors.k}
      />
      {errors.timeSteps && <Text style={styles.k}>{errors.k}</Text>}
      <TextInput
        label={t("time_step")}
        value={dt}
        onChangeText={(value) => handlingInputValid(value, setDt)}
        keyboardType="numeric"
        style={styles.input}
        error={!!errors.dt}
      />
      {errors.timeSteps && <Text style={styles.dt}>{errors.dt}</Text>}
      <TextInput
        label={t("n_step")}
        value={timeSteps}
        onChangeText={(value) => handlingInputValid(value, setTimeSteps)}
        keyboardType="numeric"
        style={styles.input}
        error={!!errors.timeSteps}
      />
      {errors.timeSteps && (
        <Text style={styles.errorText}>{errors.timeSteps}</Text>
      )}
      <Button mode="contained" onPress={simulate} style={styles.button}>
        {t("btn_simul")}
      </Button>

      {simulationData && (
        <LineChart
          data={{
            labels: simulationData.times.map((t) => t.toFixed(2)),
            datasets: [
              {
                data: simulationData.positions,
                label: "Position",
              },
              {
                data: simulationData.velocities,
                label: "Velocity",
              },
            ],
          }}
          width={Dimensions.get("window").width - 40}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2,
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
          style={styles.chart}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 20,
  },
  chart: {
    marginVertical: 20,
    borderRadius: 16,
  },
});

export default Runge;
