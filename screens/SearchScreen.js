import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import CategoryCard from "../components/CategoryCard";
export default function SearchScreen() {
  const [category, setCategory] = useState([]);
  const getCategories = async () => {
    const accessToken = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: "https://api.spotify.com/v1/browse/categories?country=VN&offset=0&limit=20",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    
      console.log(response.data.categories.items);
      const categories = response.data.categories.items;
      setCategory(categories);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(category);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textTitle}>Search</Text>
        <EvilIcons name="camera" size={30} color="white" />
      </View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "white",
          padding: 9,
          flex: 1,
          borderRadius: 3,
          height: 38,
          marginHorizontal: 10,
          marginTop: 15,
        }}
      >
        <AntDesign name="search1" size={20} color="black" />
        <TextInput
          placeholderTextColor={"rgba(19, 19, 19, 1)"}
          placeholder="Artists, songs, or podcasts"
          style={{
            fontWeight: "500",
            color: "black",
            flex: 1,
            outlineStyle: "none",
          }}
        />
      </Pressable>
      <View style={styles.content}>
        <Text style={{ color: "white",fontSize:16,fontWeight:"600" }}>Browse all</Text>
        <FlatList
          data={category}
          renderItem={({ item }) => <CategoryCard item={item} />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-around" }}
        ></FlatList>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 10,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 700,
    color: "white",
  },
  content: {
    marginHorizontal: 10,
    marginTop: 8,
  },
});
