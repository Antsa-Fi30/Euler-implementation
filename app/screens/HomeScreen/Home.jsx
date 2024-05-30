import { ActivityIndicator, StyleSheet, Dimensions, View } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Button, Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { LineChart } from "react-native-chart-kit";

const Home = () => {
  const { t } = useTranslation();
  const [simulationData, setSimulationData] = useState(null);
  const [loading, setLoading] = useState(false);

  const simulateCooling = async () => {
    try {
      const response = await axios.post("http://localhost:3000/simulate", {
        //Lien sur expo go(apres npx expo start, l'addresse juste en bas du code QR), "http://localhost:3000/.." si machine local(expo web browser)
        T_initial: 100.0,
        T_ambient: 25.0,
        k: 0.1,
        dt: 0.1,
        time_period: 10.0,
      });
      setSimulationData(response.data);
      setLoading(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(simulationData);

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={simulateCooling}>
        {t("btn_refr")}
      </Button>
      {loading && <ActivityIndicator size="large" />}
      {simulationData && (
        <View style={{ marginVertical: 15 }}>
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
            yAxisLabel="mn"
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  svgContainer: {
    paddingVertical: 20,
    marginTop: 15,
  },
});

export default Home;
