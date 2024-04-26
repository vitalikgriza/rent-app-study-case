import React from "react";
import { FlatList, View } from "react-native";
import feed from "../../../data/feed";
import PostCard from "@/screens/explore-nearby/ui/post-card";
import { Post } from "@/types/post.types";

const ExploreNearby = () => {
  return (
    <FlatList<Post>
      data={feed}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostCard post={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 20,
        gap: 16,
      }}
    />
  );
};

export default ExploreNearby;
