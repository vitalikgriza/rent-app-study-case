import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native";
import { Post } from "@/types/post.types";

const PlaceholderImage = require("@/assets/images/placeholder.png");

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <View>
      <Image
        className="aspect-[3/2] rounded-2xl overflow-hidden"
        src={post.image || PlaceholderImage}
      />
      <Text className="color-gray-500 my-1 text-xs">
        {post.bed} bed · {post.bedroom} bedroom
      </Text>
      <Text className="text-lg" numberOfLines={2}>
        {post.type} · {post.title}
      </Text>
      <Text className="font-bold text-lg number my-1">
        <Text className="color-gray-700 line-through decoration-solid decoration-2 decoration-gray-500">
          ${post.oldPrice}
        </Text>{" "}
        ${post.newPrice} <Text className="font-normal">/ night</Text>
      </Text>

      <Text className="color-gray-500 text-sm underline decoration-solid decoration-gray-500">
        ${post.totalPrice} total
      </Text>
    </View>
  );
};

export default PostCard;
