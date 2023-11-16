import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";

export default function SongInfo({ track }) {
  return (
    <Pressable
      style={{
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "white",
            maxWidth: 300,
          }}
          numberOfLines={1} // Adjust the number of lines as needed
          ellipsizeMode="tail"
        >
          {track?.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginTop: 5,
          }}
        >
          {track?.artists?.map((item, index) => (
            <Text
              key={index}
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "gray",
              }}
            >
              {item?.name}
            </Text>
          ))}
        </View>
      </View>
      <Entypo name="dots-three-vertical" size={24} color="white" />
    </Pressable>
  );
}
