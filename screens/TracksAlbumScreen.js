import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { FlatList } from "react-native";
import TrackForAlbumCard from "../components/TrackForAlbumCard";
export default function TracksAlbumScreen({ route, navigation }) {
  const [track, setTrack] = useState([]);
  const id = route.params?.item.id;
  const uri = route.params?.item.images[0].url;
  const name = route.params?.item.name;
  const artistName = route.params?.item.artists[0].name;
  const getTracksOfAlbum = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/albums/${id}/tracks`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const tracks = response.data.items;
      setTrack(tracks);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getTracksOfAlbum();
  }, []);
  console.log(track);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 5 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: 130,
              height: 130,
              borderRadius: 5,
            }}
            source={{ uri: uri }}
          />
        </View>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
          maxWidth: 250,
          paddingLeft: 10,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          marginVertical: 5,
          color: "white",
          fontSize: 12,
          paddingLeft: 10,
        }}
      >
        {artistName}
      </Text>

      <View style={styles.icons}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            style={styles.iconLeft}
            name="md-add-circle-outline"
            size={26}
            color="white"
          />
          <Entypo
            style={styles.iconLeft}
            name="arrow-with-circle-down"
            size={22}
            color="white"
          />
          <Entypo
            style={styles.iconLeft}
            name="dots-three-vertical"
            size={24}
            color="white"
          />
        </View>
        <Pressable
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "#1DB954",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          <AntDesign name="caretright" size={24} color="black" />
        </Pressable>
      </View>
      <FlatList
        data={track}
        renderItem={({ item }) => (
          <TrackForAlbumCard item={item}></TrackForAlbumCard>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 8,
  },
  iconLeft: {
    marginHorizontal: 8,
  },
});
