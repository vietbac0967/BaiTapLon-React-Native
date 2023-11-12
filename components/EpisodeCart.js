import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

export default function EpisodeCart({ item }) {
  return (
    <Pressable onPress={() => navigation.navigate("")} style={{ margin: 10 }}>
      <Image
        style={{ width: 130, height: 130, borderRadius: 5 }}
        source={{ uri: item.episode.images[0].url }}
      />
      <Text
        style={{
          width: 130,
          fontSize: 13,
          fontWeight: "500",
          color: "white",
          marginTop: 10,
        }}
        numberOfLines={1} // Adjust the number of lines as needed
        ellipsizeMode="tail"
      >
        {item?.episode.name}
      </Text>
      <Text style={{ fontSize: 10, color: "white" }}>
        {item?.episode.show.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
