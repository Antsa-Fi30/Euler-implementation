//Components
import AppTopBar from "../components/AppTopBar";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import SettingsDetailsScreen from "../screens/SettingsDetailsScreen/SettingsDetailsScreen";

//Languages
import { useTranslation } from "react-i18next";

//React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens handler
import { enableScreens } from "react-native-screens";
import BottomTabsRoutes from "./BottomTabsRoutes";

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
      <Stack.Screen name="I.S" component={BottomTabsRoutes} />
      <Stack.Screen name={t("setting.appbar")} component={SettingsScreen} />
      <Stack.Screen name="Settings details" component={SettingsDetailsScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
