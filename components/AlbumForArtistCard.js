import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

export default function AlbumForArtistCard({ item, navigation }) {
  return (
    <ScrollView>
      <Pressable
        style={{ flexDirection: "row", marginLeft: 10, marginVertical: 8 }}
        onPress={() =>
          navigation.navigate("Tracks", { item: item })
        }
      >
        <Image
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
          source={{ uri: item?.images[0].url }}
        ></Image>
        <View>
          <Text numberOfLines={1} style={styles.name}>{item?.name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>{item?.release_date}</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
    paddingLeft: 10,
  },
});
