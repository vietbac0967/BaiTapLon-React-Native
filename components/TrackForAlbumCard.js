import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function TrackForAlbumCard({ item }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 10,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text numberOfLines={1} style={styles.title}>
          {item?.name}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 12, color: "gray", maxWidth: 300 }}>
          {item?.artists.map((artist) => artist.name).join(", ")}
        </Text>
      </View>
      <Entypo name="dots-three-vertical" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    maxWidth: 300,
  },
});
