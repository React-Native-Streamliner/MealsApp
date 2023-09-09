import { StatusBar } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createStackNavigator();

export default function App() {
  return <>
    <StatusBar barStyle='default'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategory" component={CategoriesScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
}