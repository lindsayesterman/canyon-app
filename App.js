import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Select from "./Select";
import Answer from "./Answer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Select}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Select" component={Select} />
        <Tab.Screen name="Answer" component={Answer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
