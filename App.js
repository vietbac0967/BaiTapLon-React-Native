import SignupScreen from "./screens/SignupScreen";
import { PlayerContext } from "./PlayerContext";
import { ModalPortal } from "react-native-modals";
import ActionSongCard from "./components/ActionSongCard";
import SearchScreen from "./screens/SearchScreen";
import Navigation from "./StackNavigator";
import LibraryScreen from "./screens/LibraryScreen";
export default function App() {
  return (
    <PlayerContext>
      <Navigation />
      <ModalPortal />
    </PlayerContext>
    // <SearchScreen></SearchScreen>
    // <LibraryScreen></LibraryScreen>
  );
}
