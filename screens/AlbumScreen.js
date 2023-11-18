import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { FlatList } from "react-native";
import AlbumForArtistCard from "../components/AlbumForArtistCard";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { ScrollView } from "react-native";
export default function AlbumScreen({ navigation, route }) {
  const id = route.params?.id;
  const image = { uri: route.params?.url };
  const name = route.params?.name;
  const [album, setAlbum] = useState([]);
  const getAlbums = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/artists/${id}/albums`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const albums = response.data.items;
      setAlbum(albums);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAlbums();
  }, []);
  console.log(album);
  return (
    <ScrollView style={styles.container}>
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{ aspectRatio: 1, width: "100%", height: "auto" }}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 5 }}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </Pressable>
        </ImageBackground>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            paddingLeft: 15,
          }}
        >
          Popular releases
        </Text>
      </View>
      <FlatList
        data={album}
        renderItem={({ item}) => (
          <AlbumForArtistCard item={item} navigation={navigation}></AlbumForArtistCard>
        )}
      ></FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});
