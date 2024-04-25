//React
import { useCallback, useState, useMemo } from "react";

//Components
import AppTopBar from "./app/components/AppTopBar";
import Routes from "./app/routes/Routes";
import SettingsScreen from "./app/screens/SettingsScreen/SettingsScreen";
import SuggestionDetails from "./app/screens/SuggestionDetailsScreen/SuggestionDetails";
import SettingsDetailsScreen from "./app/screens/SettingsDetailsScreen/SettingsDetailsScreen";

//React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//React native paper and it's Theming
import { Provider as PaperProvider, ThemeProvider } from "react-native-paper";

//Expo
import { useFonts } from "expo-font";

//Theme of the app
import { lightTheme, darkTheme } from "./app/utils/Theme";

//Theme context
import { ThemeContext } from "./app/context/ThemeContext";

//Save configuration
import AsyncStorage from "@react-native-async-storage/async-storage";

//Function:
const Stack = createNativeStackNavigator();

//Components exported
export default function App() {
  //Using context theme
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? darkTheme : lightTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  // Loading customized fonts
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <ThemeContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              header: () => <AppTopBar />,
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
    </ThemeContext.Provider>
  );
}
