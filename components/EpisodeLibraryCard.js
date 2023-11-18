import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
export default function EpisodeLibraryCard({ item }) {
  return (
    <View
      style={{
        marginVertical: 8,
        marginVertical: 5,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 5, marginLeft: 8 }}
          source={{ uri: item.episode.images[0].url }}
        />
        <View>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: "white",
              marginTop: 10,
              paddingLeft: 8,
              maxWidth: 300,
            }}
          >
            {item?.episode.name}
          </Text>
          <Text style={{ color: "white", fontSize: 12, paddingLeft: 8 }}>
            {item?.episode.show.name}
          </Text>
        </View>
      </View>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={{
          color: "white",
          fontSize: 12,
          paddingHorizontal: 8,
        }}
      >
        {item?.episode.description}
      </Text>

      <View style={styles.icons}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            style={styles.iconLeft}
            name="checkcircle"
            size={24}
            color="green"
          />
          <Entypo
            style={styles.iconLeft}
            name="arrow-with-circle-down"
            size={24}
            color="white"
          />
          <AntDesign
            style={styles.iconLeft}
            name="sharealt"
            size={24}
            color="white"
          />
          <Entypo style={styles.iconLeft} name="dots-three-vertical" size={24} color="white" />
        </View>
        <View>
          <Ionicons name="caret-forward-circle" size={24} color="white" />
        </View>
      </View>
      <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginVertical: 8,
  },
  iconLeft: {
    marginHorizontal: 8,
  },
});
