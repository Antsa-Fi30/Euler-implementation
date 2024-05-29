import { ActivityIndicator, StyleSheet, ScrollView, View } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Button, Text } from "react-native-paper";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [simulationData, setSimulationData] = useState(null);
  const [loading, setLoading] = useState(false);

  const simulateCooling = async () => {
    try {
      const response = await axios.post("http://192.168.42.187:3000/simulate", {
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
        <ScrollView style={{ marginVertical: 15 }}>
          <Text>Temps (s) : {simulationData.times.join(", ")}</Text>
          <Text>
            Températures (°C) : {simulationData.temperatures.join(", ")}
          </Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
