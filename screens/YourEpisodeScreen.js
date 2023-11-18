import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import EpisodeLibraryCard from "../components/EpisodeLibraryCard";
import Badge from "../components/Badge";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
export default function YourEpisodeScreen({navigation}) {
  const [episode, setEpisode] = useState([]);
  const getSavedEpisodes = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me/episodes",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const episodes = response.data.items;
      setEpisode(episodes);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getSavedEpisodes();
  }, []);
  console.log(episode);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ marginHorizontal: 10 }}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>

      <ScrollView>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 9,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#79AC78",
              padding: 9,
              flex: 1,
              borderRadius: 3,
              height: 38,
            }}
          >
            <AntDesign name="search1" size={20} color="white" />
            <TextInput
              placeholder="Find in your episodes"
              placeholderTextColor={"white"}
              style={{
                fontWeight: "500",
                color: "white",
                flex: 1,
                outlineStyle: "none",
              }}
            />
          </Pressable>

          <Pressable
            style={{
              marginHorizontal: 10,
              padding: 10,
              borderRadius: 3,
              height: 38,
              backgroundColor: "#79AC78",
            }}
          >
            <Text style={{ color: "white" }}>Sort</Text>
          </Pressable>
        </Pressable>

        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: 600,
            paddingTop: 10,
            marginLeft: 8,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Your Episodes
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginVertical: 8,
          }}
        >
          <Badge title={"Downloaded"}></Badge>
          <Badge title={"Unplayed"}></Badge>
          <Badge title={"Continue listening"}></Badge>
        </View>
        <FlatList
          data={episode}
          renderItem={({ item }) => (
            <EpisodeLibraryCard item={item}></EpisodeLibraryCard>
          )}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});
