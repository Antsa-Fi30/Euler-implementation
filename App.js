//React
import { useState } from "react";

//Components
import AppTopBar from "./app/components/AppTopBar";
import Routes from "./app/routes/Routes";
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
import SettingsDetailsScreen from "./app/screens/SettingsDetailsScreen/SettingsDetailsScreen";

//Function:
const Stack = createNativeStackNavigator();

//Components exported
export default function App() {
  // Loading customized fonts
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  //Etat du theme
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => <AppTopBar toggleTheme={toggleTheme} />,
          }}
        >
          <Stack.Screen name="Dish Detective" component={Routes} />
          <Stack.Screen
            name={"Suggestion details"}
            component={SuggestionDetails}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen
            name="Settings details"
            component={SettingsDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
