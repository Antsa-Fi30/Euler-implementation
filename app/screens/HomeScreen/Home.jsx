import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import axios from "axios";

const Home = () => {
  const [simulationData, setSimulationData] = useState(null);

  const simulateCooling = async () => {
    try {
      const response = await axios.post("http://localhost:3000/simulate", {
        T_initial: 100.0,
        T_ambient: 25.0,
        k: 0.1,
        dt: 0.1,
        time_period: 10.0,
      });
      setSimulationData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Simuler le refroidissement" onPress={simulateCooling} />
      {simulationData && (
        <View>
          <Text>Temps (s) : {simulationData.times.join(", ")}</Text>
          <Text>
            Températures (°C) : {simulationData.temperatures.join(", ")}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
