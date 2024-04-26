import React from "react";
import { Text, Pressable } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Link } from "expo-router";

interface SearchButtonProps {
  className?: string;
}

const SearchButton = ({ className }: SearchButtonProps) => {
  return (
    <Link href="/explore/search-destinations" asChild>
      <Pressable
        className={`flex-row bg-white w-[80%] justify-center gap-2 items-center py-4 rounded-full ${className} active:bg-gray-200`}
      >
        <Fontisto name="search" size={25} color="#f15454" />
        <Text className="font-medium text-base">Where are you going?</Text>
      </Pressable>
    </Link>
  );
};

export default SearchButton;
