import React, { Component, useEffect } from "react";
//React Native components
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

//React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";

//Icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

//UI Library : react-native paper
import { BottomNavigation, useTheme } from "react-native-paper";

//Pages in Home 's screen
import Map from "../screens/HomeScreen/Map";
import Suggestion from "../screens/HomeScreen/Suggestion";
import Search from "../screens/HomeScreen/Search";
import Itineraire from "../screens/HomeScreen/Itineraire";

//Traductor
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();

const Routes = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            style={[
              styles.bottombar,
              { backgroundColor: theme.colors.background },
            ]}
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;
              return label;
            }}
          />
        )}
      >
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarLabel: `${t("menu1")}`,
            tabBarIcon: ({ color, size }) => {
              return <Icon name="map" size={size} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name="Suggestion"
          component={Suggestion}
          options={{
            tabBarLabel: `${t("menu2")}`,
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  name="map-marker-multiple-outline"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Actuality"
          component={Search}
          options={{
            tabBarLabel: `${t("menu3")}`,
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="restaurant-sharp" size={size} color={color} />
              );
            },
          }}
        />

        <Tab.Screen
          name="Itineraires"
          component={Itineraire}
          options={{
            tabBarLabel: `${t("menu4")}`,
            tabBarIcon: ({ color, size }) => {
              return <Icon name="map" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    margin: 10,
  },
  bottombar: {
    // padding: 2,
  },
});
