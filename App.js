import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";

function NewsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>News</Text>
      <Button title="Next Page" onPress={() => navigation.navigate("News2")} />
    </View>
  );
}

function NewsScreen2() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>News2</Text>
    </View>
  );
}

function WeatherScreen() {
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Weather</Text>
    // </View>
  );
}

function TodosScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Todos</Text>
    </View>
  );
}

function OptionsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Options</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const NewsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen name="News2" component={NewsScreen2} />
  </Stack.Navigator>
);

const WeatherStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Weather" component={WeatherScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "#AAAAAA",
    }}
  >
    <Tab.Screen
      name="News"
      component={NewsStackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="newspaper" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Weather"
      component={WeatherStackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="weather-cloudy"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Todo"
      component={TodosScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="checkbox-marked-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Options"
      component={OptionsScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="cogs" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
