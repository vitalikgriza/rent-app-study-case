import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import SearchButton from "@/screens/explore/ui/search-button";
import { Link } from "expo-router";

const Explore = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1 w-full justify-center p-6"
        source={require("@/assets/images/wallpaper.jpg")}
        resizeMode="cover"
      >
        <SearchButton className="absolute top-[100] self-center" />
        <Text className="font-bold color-amber-50 text-7xl">Go</Text>
        <Text className="font-bold color-amber-50 text-7xl">Near</Text>
        <Link href="/explore/nearby" asChild>
          <Pressable className="bg-white self-start py-4 px-7 rounded-lg mt-20 active:bg-gray-200">
            <Text className="font-bold">Explore nearby stays</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default Explore;
