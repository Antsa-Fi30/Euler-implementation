//Components
import AppTopBar from "../components/AppTopBar";
import Routes from "../routes/Routes";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import SettingsDetailsScreen from "../screens/SettingsDetailsScreen/SettingsDetailsScreen";
import Lesson from "../screens/LessonScreen/Lesson";

//Languages
import { useTranslation } from "react-i18next";

//React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Function creating Navigation:
const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <AppTopBar />,
      }}
    >
      <Stack.Screen name="Euler" component={Routes} />
      <Stack.Screen name="Lesson" component={Lesson} />
      <Stack.Screen name={t("setting.appbar")} component={SettingsScreen} />
      <Stack.Screen name="Settings details" component={SettingsDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
