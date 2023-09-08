import { StatusBar } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return <>
    <StatusBar barStyle='default'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategory" component={CategoriesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  </>
}