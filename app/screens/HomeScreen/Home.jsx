import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { BannerNotif } from "../../components/HomeScreen/BannerNotif";
import LessonSuggest from "../../components/HomeScreen/LessonSuggest";

const Home = () => {
  const lessons = [
    {
      title: "Introduction aux Graphes",
      description: "Apprenez les bases des graphes.",
      screen: "Lesson1",
    },
    {
      title: "Chemins Eulériens",
      description: "Découvrez comment trouver des chemins eulériens.",
      screen: "EulerianExercise",
    },
    {
      title: "Circuits Eulériens",
      description: "Étudiez les circuits eulériens.",
      screen: "Lesson3",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.lessonsContainer}>
        {lessons.map((lesson, index) => (
          <LessonSuggest
            key={index}
            title={lesson.title}
            description={lesson.description}
            onPress={() => navigation.navigate(lesson.screen)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
