import React from "react";
import { View } from "react-native";
import { Redirect, Slot, Tabs } from "expo-router";
import { Fontisto } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#f15454" }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Fontisto name="hipchat" size={20} color={color} />
          ),
          headerShown: true,
        }}
      />
    </Tabs>
  );
};
