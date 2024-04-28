//React
import { useCallback, useState, useMemo, useEffect } from "react";

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
import { Provider as PaperProvider } from "react-native-paper";

//Expo
import { useFonts } from "expo-font";

//Theme of the app
import { lightTheme, darkTheme } from "./app/utils/Theme";

//Theme context
import { ThemeContext } from "./app/context/ThemeContext";

//language
import "./app/lang/i18n";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

//Save configuration(s)
import AsyncStorage from "@react-native-async-storage/async-storage";

//Function creating Navigation:
const Stack = createNativeStackNavigator();

//Function loading languages
const loadLang = async () => {
  try {
    const storedLanguage = await AsyncStorage.getItem("LANGUAGE");
    console.log(storedLanguage);
    if (storedLanguage) {
      i18next.changeLanguage(storedLanguage);
      console.log("loaded");
    }
  } catch (err) {
    console.log("Error at fetching item because : " + err);
  }
};

//Components exported
export default function App() {
  const { t } = useTranslation();
  // Loading customized fonts
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  //Using context theme
  const [isThemeDark, setIsThemeDark] = useState(false);
  let theme = isThemeDark ? darkTheme : lightTheme; //Mamadibadika an le theme
  const toggleTheme = useCallback(() => {
    const newTheme = !isThemeDark;
    AsyncStorage.setItem("isThemeDark", JSON.stringify(newTheme))
      .then(() => {
        setIsThemeDark(newTheme);
      })
      .catch((err) => {
        console.log("Error in : " + err);
      });
  }, [isThemeDark]);
  //Storing items
  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  //Last theme applied appear first when app is started
  useEffect(() => {
    AsyncStorage.getItem("isThemeDark")
      .then((theme) => {
        if (theme !== null) {
          setIsThemeDark(JSON.parse(theme)); //Selon ce qui etait configurer depuis la dernier valeur du mode Sombre (true or false)
        }
      })
      .catch((err) => {
        console.log("Not gotten because : " + err);
      });
    loadLang(); //Loading language in launch
  }, [loadLang]);

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
              name={t("appbar.details")}
              component={SuggestionDetails}
            />
            <Stack.Screen
              name={t("appbar.setting")}
              component={SettingsScreen}
            />
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
