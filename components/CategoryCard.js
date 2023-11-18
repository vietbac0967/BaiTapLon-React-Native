import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const colors = [
  "#9854B2",
  "#678026",
  "#3371E4",
  "#CF4321",
  "#ABBB6D",
  "#223160",
  "#75A768",
  "#8768A7",
];
function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}
export default function CategoryCard({ item }) {
  const color = colors[Math.floor(random(0, 8))];
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.text}>{item?.name}</Text>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: item?.icons[0].url }}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: 180,
    height: 109,
    borderRadius: 4,
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 700,
    paddingTop: 10,
    paddingLeft: 20,
    maxWidth: 100,
  },
  image: {
    height: 67.331,
    width: 67.331,
    justifyContent: "flex-end",
  },
  imageContainer: {
    marginLeft: "auto",
    marginTop: "auto",
  },
});
