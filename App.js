//React
import { useState } from "react";

//Components
import AppTopBar from "./app/components/AppTopBar";
import Routes from "./app/constants/Routes";
import SettingsScreen from "./app/screens/SettingsScreen/SettingsScreen";
import SuggestionDetails from "./app/screens/SuggestionDetailsScreen/SuggestionDetails";

//React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//React native paper and it's Theming
import { Provider as PaperProvider } from "react-native-paper";
import { darkTheme, lightTheme } from "./app/utils/Theme";

//Expo
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  // Loading customized fonts
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <PaperProvider theme={lightTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => <AppTopBar />, // Utilisez votre composant d'App bar personnalisé pour chaque écran
          }}
        >
          <Stack.Screen name="Dish Detective" component={Routes} />
          <Stack.Screen
            name={"Suggestion details"}
            component={SuggestionDetails}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
