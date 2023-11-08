import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};
export default function LoginScreen() {
  const navigation = useNavigation();

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      responseType: AuthSession.ResponseType.Token,
      clientId: "7055d2489a0d499f9aae13799a1ca61c",
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public",
      ],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      redirectUri: "http://localhost:19006/callback",
    },
    discovery
  );

  // CC2mKWxJYz
  useEffect(() => {
    if (response?.type === "success") {
      const { access_token, expires_in } = response.params;
      console.log(response);
      console.log(access_token);
      const currentTime = Date.now();
      const expirationTime = currentTime + expires_in * 1000; // Convert seconds to milliseconds
      const accessTokenExpirationDate = new Date(expirationTime);
      const accessTokenExpirationTimestamp =
        accessTokenExpirationDate.getTime();
      console.log(parseInt(accessTokenExpirationTimestamp));
      storeDate(access_token, accessTokenExpirationTimestamp);
    } else {
      checkStoredToken();
    }
  }, [response]);

  const storeDate = async (token, expirationDate) => {
    try {
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("expirationDate", expirationDate);
      navigation.navigate("Main");
    } catch (e) {
      console.log(e);
    }
  };
  const checkStoredToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("token");
      const storedExpirationDate = await AsyncStorage.getItem("expirationDate");

      if (storedToken && storedExpirationDate) {
        const currentTime = Date.now();

        console.log(currentTime);
        console.log(parseInt(storedExpirationDate));
        if (currentTime < parseInt(storedExpirationDate)) {
          // Token is still valid, navigate to "Main" screen
          navigation.navigate("Main");
        } else {
          // Token has expired, remove it and proceed to authentication
          await AsyncStorage.removeItem("token");
          await AsyncStorage.removeItem("expirationDate");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <Entypo
          style={{ textAlign: "center" }}
          name="spotify"
          size={80}
          color="white"
        />
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Millions of Songs Free on spotify!
        </Text>

        <View style={{ height: 80 }} />
        <Pressable
          onPress={() => promptAsync()}
          style={{
            backgroundColor: "#1DB954",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text>Sign In with spotify</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <MaterialIcons name="phone-android" size={24} color="white" />
          <Text style={styles.text}>Continue with phone number</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <AntDesign name="google" size={24} color="red" />
          <Text style={styles.text}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Entypo name="facebook-with-circle" size={24} color="blue" />
          <Text style={styles.text}>Sign In with facebook</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    flex: 1,
  },
  button: {
    backgroundColor: "#131624",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderColor: "#C0C0C0",
    borderWidth: 0.8,
  },
});
