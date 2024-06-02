import React from "react";
//React Native components
import { StyleSheet } from "react-native";

//React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";

//Icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//UI Library : react-native paper
import { BottomNavigation, useTheme } from "react-native-paper";

//Pages in Home 's screen
import Home from "../screens/HomeScreen/Home";

//Traductor
import { useTranslation } from "react-i18next";
import Runge from "../screens/HomeScreen/Runge";

const Tab = createBottomTabNavigator();

const BottomTabsRoutes = () => {
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
          name="Cooling simulator"
          component={Home}
          options={{
            tabBarLabel: `${t("tab1")}`,
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Runge simulator"
          component={Runge}
          options={{
            tabBarLabel: `${t("tab2")}`,
            tabBarIcon: ({ color, size }) => {
              return <Icon name="edit" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabsRoutes;

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
