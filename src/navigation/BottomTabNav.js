import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import NewsStackNav from "./NewsStackNav";

function DummyScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dummy Screen</Text>
    </View>
  );
}

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
      component={NewsStackNav}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="newspaper" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Weather"
      component={DummyScreen}
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
      component={DummyScreen}
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
      component={DummyScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="cogs" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

function BottomTabNav() {
  return <TabNavigator />;
}

export default BottomTabNav;
