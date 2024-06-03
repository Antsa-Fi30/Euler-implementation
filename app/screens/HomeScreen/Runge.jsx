import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import { rungeMethod } from "../../constants/Runge-Kutta";

const VehicleSimulation = () => {
  const [x0, setX0] = useState("0");
  const [v0, setV0] = useState("50");
  const [k, setK] = useState("0.1");
  const [dt, setDt] = useState("0.1");
  const [timeSteps, setTimeSteps] = useState("100");
  const [simulationData, setSimulationData] = useState(null);

  const a = (t, x, v) => -parseFloat(k) * v;

  const simulate = () => {
    const data = rungeMethod(
      parseFloat(x0),
      parseFloat(v0),
      a,
      parseFloat(dt),
      parseInt(timeSteps)
    );
    setSimulationData(data);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Initial Position"
        value={x0}
        onChangeText={setX0}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Initial Velocity"
        value={v0}
        onChangeText={setV0}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Damping Coefficient (k)"
        value={k}
        onChangeText={setK}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Time Step (dt)"
        value={dt}
        onChangeText={setDt}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Number of Time Steps"
        value={timeSteps}
        onChangeText={setTimeSteps}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={simulate} style={styles.button}>
        Run Simulation
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

export default VehicleSimulation;
