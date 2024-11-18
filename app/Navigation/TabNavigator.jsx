import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import React from "react";

import History from "./TabNav/History";
import Profile from "./TabNav/Profile";
import Main from "./TabNav/Main";
import Updates from "./TabNav/Updates";
import Services from "./TabNav/Services";

const Tab = createBottomTabNavigator();

function MainScreen() {
  return <Main />;
}

function HistoryScreen() {
  return <History />;
}

function ProfileScreen() {
  return <Profile />;
}

function UpdatesScreen() {
  return <Updates />;
}

function ServicesScreen() {
  return <Services />;
}

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, statusBarStyle: "dark-content" }}>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Updates" component={UpdatesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

