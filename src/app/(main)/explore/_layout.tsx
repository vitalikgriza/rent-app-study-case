import React from "react";
import { Stack } from "expo-router";

const ExploreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="nearby"
        options={{
          headerBackTitle: "Back",
          title: "Explore Nearby",
        }}
      />
      <Stack.Screen
        name="search-destinations"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ExploreLayout;
