import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, Ionicons, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LikedSongsScreen from "./screens/LikedSongsScreen";
import SongInfoScreen from "./screens/SongInfoScreen";
import ActionSongCard from "./components/ActionSongCard";
import SearchScreen from "./screens/SearchScreen";
import SettingScreen from './screens/SettingScreen';
import PremiumScreen from './screens/PremiumScreen';
import ChooseArtistScreen from './screens/ChooseArtistScreen';
import SignupScreen from './screens/SignupScreen';
import AlbumScreen from './screens/AlbumScreen';
import TracksAlbumScreen from './screens/TracksAlbumScreen';
import YourEpisodeScreen from './screens/YourEpisodeScreen';
import LibraryScreen from './screens/LibraryScreen';

const Tab = createBottomTabNavigator();

function BottomTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          shadowOpacity: 4,
          shadowRadius: 4,
          elevation: 4,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="white" />
            ) : (
              <AntDesign name="home" size={24} color="white" />
            ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Home')
          }
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search" size={24} color="white" />
            ) : (
              <Ionicons name="search-outline" size={24} color="white" />
            ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Search')
          }
        })}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Library",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="library" size={24} color="white" />
            ) : (
              <Ionicons name="library-outline" size={24} color="white" />
            ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Library')
          }
        })}
      />
      <Tab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          tabBarLabel: "Premium",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="spotify" size={24} color="white" />
            ) : (
              <SimpleLineIcons name="social-spotify" size={24} color="white" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Liked"
          component={LikedSongsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={SongInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Action"
          component={ActionSongCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Choose"
          component={ChooseArtistScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Album"
          component={AlbumScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tracks"
          component={TracksAlbumScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Episode"
          component={YourEpisodeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
