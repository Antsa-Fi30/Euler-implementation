import AppTopBar from "./app/components/AppTopBar";
import Routes from "./app/screens/HomeScreen/Routes";
import SettingsScreen from "./app/screens/SettingsScreen/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <AppTopBar />, // Utilisez votre composant d'App bar personnalisé pour chaque écran
        }}
      >
        <Stack.Screen name="Dish Detective" component={Routes} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
