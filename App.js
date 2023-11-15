import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./StackNavigator";
import SignupScreen from './screens/SignupScreen';
import SettingScreen from './screens/SettingScreen';
export default function App() {
  return (
    // <SignupScreen />
    <SettingScreen />
  );
}


