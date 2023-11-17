import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
export default function ActionSongCard({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 15,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 35,
              height: 10,
              backgroundColor: "rgb(102,102,102)",
              borderRadius: 3,
            }}
          ></View>
        </Pressable>
      </View>
      {/* Info card */}
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
      >
        <Image
          style={{ width: 50, height: 50, marginRight: 10 }}
          source={{ uri: item?.track?.album?.images[0].url }}
        />

        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={1}
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: "white",
            }}
          >
            {item?.track?.name}
          </Text>
          <Text style={{ marginTop: 4, color: "#989898" }}>
            {item?.track?.artists[0].name}
          </Text>
        </View>
      </Pressable>

      <View
        style={{
          width: 5,
          height: 2,
          borderRightColor: "gray",
          borderWidth: 2,
        }}
      ></View>

      <View style={styles.actions}>
        <Pressable style={styles.button}>
          <Ionicons name="ios-add-circle-outline" size={30} color="white" />
          <Text style={styles.text}>Add to playlist</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Ionicons name="remove-circle-outline" size={30} color="white" />
          <Text style={styles.text}>Remove from this playlist</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <MaterialCommunityIcons
            name="diamond-stone"
            size={30}
            color="white"
          />
          <Text style={styles.text}>Listen to music ad-free</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <MaterialIcons name="album" size={30} color="white" />
          <Text style={styles.text}>View album</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Feather name="music" size={30} color="white" />
          <Text style={styles.text}>View artist</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <AntDesign name="sharealt" size={30} color="white" />
          <Text style={styles.text}>Share</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Feather name="radio" size={30} color="white" />
          <Text style={styles.text}>Go to song radio</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Feather name="user-plus" size={30} color="white" />
          <Text style={styles.text}>Show credits</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <MaterialCommunityIcons name="barcode" size={30} color="white" />
          <Text style={styles.text}>Show Spotify Code</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(36,36,36)",
  },
  header: {},
  button: {
    padding: 10,
    flexDirection: "row",
    marginVertical: 2,
  },
  text: {
    fontWeight: "500",
    color: "white",
    paddingVertical: 5,
    marginLeft: 10,
  },
  info: {
    flexDirection: "row",
  },
});
