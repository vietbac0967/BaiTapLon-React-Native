import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import Badge from "../components/Badge";
export default function LibraryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <Image
            resizeMode="cover"
            style={{ width: 35, height: 35, borderRadius: 27.5 }}
            source={require("../assets/avatar.png")}
          ></Image>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: 600,
              marginLeft: 5,
            }}
          >
            Your Library
          </Text>
        </View>
        <Ionicons name="ios-add-outline" size={24} color="white" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 7,
          marginVertical: 8,
        }}
      >
        <Badge title={"Playlist"}></Badge>
        <Badge title={"Artists"}></Badge>
        <Badge title={"Albums"}></Badge>
        <Badge title={"Podcasts & shows"}></Badge>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="arrow-down" size={15} color="white" />
          <Ionicons name="arrow-up" size={15} color="white" />
          <Text
            style={{
              fontSize: 12,
              color: "#fff",
              fontWeight: 600,
              paddingLeft: 5,
            }}
          >
            Recently played
          </Text>
        </View>
        <MaterialCommunityIcons name="vector-square" size={24} color="white" />
      </View>

      <View style={styles.content}>
        <View
          style={{ flexDirection: "row", marginLeft: 8, marginVertical: 5 }}
        >
          <View
            style={{
              background:
                "linear-gradient(134deg, #4A39EA 13.16%, #868AE1 56.47%, #B9D4DB 98.68%)",
              width: 67,
              height: 67,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable onPress={() => navigation.navigate("Liked")}>
              <AntDesign name="heart" size={24} color="white" />
            </Pressable>
          </View>
          <View style={{ marginLeft: 6, paddingVertical: 10 }}>
            <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>
              Liked Songs
            </Text>
            <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
              <Text style={styles.sub}>Playlist</Text>
              <Text style={[styles.sub, { paddingLeft: 5 }]}>58 songs</Text>
            </View>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", marginLeft: 8, marginVertical: 5 }}
        >
          <Pressable
            onPress={() => navigation.navigate("Episode")}
            style={{
              background: "#006350",
              width: 67,
              height: 67,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="save" size={24} color="white" />
          </Pressable>
          <View style={{ marginLeft: 6, paddingVertical: 10 }}>
            <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>
              Your Episodes
            </Text>
            <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
              <Text style={styles.sub}>Save & downloaded episodes</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  content: {},
  sub: {
    fontSize: 13,
    color: "#B3B3B3",
    fontWeight: "500",
  },
});
