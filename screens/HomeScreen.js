import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import ArtistCard from "../components/ArtistCard";
import { SafeAreaView } from "react-native-web";
import RecentlyPlayedCard from "../components/RecentlyPlayedCard";
import EpisodeCart from "../components/EpisodeCart";
export default function HomeScreen() {
  const [userProfile, setUserProfile] = useState();
  const navigation = useNavigation();
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [episode, setEpisode] = useState([]);

  const greetingMessage = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return "Good Morning";
    } else if (currentTime < 16) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  const message = greetingMessage();
  const getRecentlyPlayedSongs = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me/player/recently-played?limit=4",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const tracks = response.data.items;
      setRecentlyPlayed(tracks);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getEpisode = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me/episodes?limit=4",
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
    getRecentlyPlayedSongs();
    getEpisode();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: "#282828",
          borderRadius: 4,
          elevation: 3,
        }}
      >
        <Image
          style={{ height: 55, width: 55 }}
          source={{ uri: item.track.album.images[0].url }}
        />
        <View
          style={{ flex: 1, marginHorizontal: 8, justifyContent: "center" }}
        >
          <Text
            numberOfLines={2}
            style={{ fontSize: 13, fontWeight: "bold", color: "white" }}
          >
            {item.track.name}
          </Text>
        </View>
      </Pressable>
    );
  };
  useEffect(() => {
    const getTopItems = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("token");
        if (!accessToken) {
          console.log("Access token not found");
          return;
        }
        const type = "artists";
        const response = await axios.get(
          `https://api.spotify.com/v1/me/top/${type}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setTopArtists(response.data.items);
      } catch (err) {
        console.log(err.message);
      }
    };

    getTopItems();
  }, []);
  console.log(episode);
  console.log(recentlyPlayed);
  console.log(topArtists);

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              {message}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <FontAwesome
              name="bell-o"
              size={24}
              color="white"
              style={{ padding: 5, paddingTop: 10 }}
            />
            <MaterialCommunityIcons
              name="clock-time-three-outline"
              size={24}
              color="white"
              style={{ padding: 5, paddingTop: 10 }}
            />
            <Pressable onPress={() => navigation.navigate("Setting")}>
              <SimpleLineIcons
                name="settings"
                size={22}
                color="white"
                style={{ paddingTop: 10, paddingHorizontal: 5 }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 12,
            marginVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#282828",
              padding: 10,
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>Music</Text>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#282828",
              padding: 10,
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>
              Podcasts & Shows
            </Text>
          </Pressable>
        </View>
        <View style={{ height: 10 }}></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            style={styles.badge}
            onPress={() => navigation.navigate("Liked")}
          >
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="heart" size={24} color="white" />
              </Pressable>
            </LinearGradient>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
              Liked Song
            </Text>
          </Pressable>

          <View style={styles.badge}>
            <Image
              style={{ width: 55, height: 55 }}
              source={{ uri: "https://i.pravatar.cc/100" }}
            ></Image>
            <View style={styles.randomArtist}>
              <Text
                style={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              >
                Hiphop Vietnamese
              </Text>
            </View>
          </View>
        </View>
        <FlatList
          data={recentlyPlayed}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        ></FlatList>

        <Text style={styles.title}>Your Top Artists</Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topArtists.map((item, index) => (
              <ArtistCard item={item} key={index} />
            ))}
          </ScrollView>
        </View>
        <View style={{ height: 20 }}></View>
        <Text style={styles.title}>Recently Played</Text>
        <FlatList
          horizontal
          data={recentlyPlayed}
          renderItem={({ item }) => (
            <RecentlyPlayedCard item={item}></RecentlyPlayedCard>
          )}
        ></FlatList>
        <Text style={styles.title}>Episodes for you</Text>
        <FlatList
          data={episode}
          horizontal
          renderItem={({ item }) => <EpisodeCart item={item}></EpisodeCart>}
        ></FlatList>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 10,
  },
  badge: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: "#202020",
    borderRadius: 4,
    elevation: 3,
  },
});
