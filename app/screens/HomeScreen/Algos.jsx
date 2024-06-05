import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import AlgosCard from "../../components/AlgosScreen/AlgosCard";
import { algos } from "../../constants/Algos";

const Algos = () => {
  const algorithms = algos();
  return (
    <ScrollView style={{ padding: 15 }}>
      {algorithms.map((item, index) => {
        return (
          <View key={index} style={{ marginVertical: 15 }}>
            <AlgosCard
              Title={item.title}
              Subtitle={item.subtitle}
              description={item.description}
              uri={item.path}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Algos;

const styles = StyleSheet.create({});
