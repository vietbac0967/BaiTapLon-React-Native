import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./StackNavigator";
import SignupScreen from "./screens/SignupScreen";
import { PlayerContext } from "./PlayerContext";
import { ModalPortal } from "react-native-modals";
import ActionSongCard from "./components/ActionSongCard";
import SearchScreen from "./screens/SearchScreen";
export default function App() {
  return (
    <PlayerContext>
      <Navigation />
      <ModalPortal />
    </PlayerContext>
    // <SearchScreen></SearchScreen>
  );
}
