//Components
import AppTopBar from "../components/AppTopBar";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import SettingsDetailsScreen from "../screens/SettingsDetailsScreen/SettingsDetailsScreen";

//Languages
import { useTranslation } from "react-i18next";

//React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen/Home";

//screens handler
import { enableScreens } from "react-native-screens";

enableScreens();

//Function creating Navigation:
const Stack = createNativeStackNavigator();

const Routes = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <AppTopBar />,
      }}
    >
      <Stack.Screen name="Euler" component={Home} />
      <Stack.Screen name={t("setting.appbar")} component={SettingsScreen} />
      <Stack.Screen name="Settings details" component={SettingsDetailsScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
