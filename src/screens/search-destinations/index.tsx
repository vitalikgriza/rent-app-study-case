import React from "react";
import { View, Text, StatusBar } from "react-native";

const DestinationSearch = () => {
  return (
    <View className="flex-1 bg-white, p-8">
      <StatusBar barStyle="light-content" />
      <Text className="text-xl font-semibold">Search for a destination</Text>
    </View>
  );
};

export default DestinationSearch;
