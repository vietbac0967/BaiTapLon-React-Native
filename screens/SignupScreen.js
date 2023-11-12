import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    TextInput,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import InputField from '../components/InputField'
export default function SignupScreen() {
    const [stage, setStage] = useState("email");
    const [confirm_1, setConfirm_1] = useState(false);
    const [confirm_2, setconfirm_2] = useState(false);
    const renderCurrentStage = () => {
        switch (stage) {
            case "email":
                return (
                    <View>
                        {/* Email input field and message */}
                        <InputField
                            textTitle={"What’s your email?"}
                            message={"You’ll need to confirm this email later"}
                        />
                        <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 50 }}>
                            <Pressable
                                onPress={() => setStage("password")}
                                style={styles.button}
                            >
                                <Text
                                    style={{ color: "#000", fontSize: "15px", fontWeight: 600 }}
                                >
                                    Next
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                );
            case "password":
                return (
                    <View>
                        {/* Password input field and message */}
                        <InputField
                            textTitle={"Create a password"}
                            message={"Use at least 8 characters."}
                        />
                        <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 50 }}>
                            <Pressable
                                onPress={() => setStage("gender")}
                                style={styles.button}
                            >
                                <Text
                                    style={{ color: "#000", fontSize: "15px", fontWeight: 600 }}
                                >
                                    Next
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                );
            case "gender":
                return (
                    <View>
                        {/* Password input field and message */}
                        <InputField
                            textTitle={"What’s your gender?"}
                            message={"Your gender"}
                        />
                        <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 50 }}>
                            <Pressable
                                onPress={() => setStage("name")}
                                style={styles.button}
                            >
                                <Text
                                    style={{ color: "#000", fontSize: "15px", fontWeight: 600 }}
                                >
                                    Next
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                );
            case "name":
                return (
                    <View>
                        <InputField
                            textTitle={"What's your name?"}
                            message={"This appears on your spotify profile"}
                        ></InputField>
                        <View>
                            <View
                                style={{
                                    width: "100%",
                                    height: 1,
                                    backgroundColor: "gray",
                                    borderWidth: 1,
                                    borderBlockColor: "gray",
                                }}
                            ></View>
                            <View style={{ marginTop: 25, marginLeft: 10, }}>
                                <Text style={styles.text}>
                                    By tapping on “Create account”, you agree to the spotify Terms
                                    of Use.
                                </Text>
                                <Text
                                    style={[styles.text, { color: "rgba(30, 215, 96, 1)" }]}
                                >Terms of Use</Text>
                                <Text style={styles.text}>
                                    To learn more about how Spotify collect, uses, shares and
                                    protects your personal data, Please see the Spotify Privacy
                                </Text>
                                <Text
                                    style={[styles.text, { color: "rgba(30, 215, 96, 1)" }]}
                                >Privacy Policy</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.text}>Please send me news and offers from Spotify.</Text>
                                    <Pressable
                                        onPress={() => {
                                            setConfirm_1(prevState => !prevState)
                                        }}
                                        style={{}}>
                                        {
                                            confirm_1 ? <AntDesign name="checkcircleo" size={24} color="white" /> :
                                                <Entypo name="circle" size={24} color="white" />
                                        }
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                    <Text style={styles.text}>Share my registration data with Spotify’s content providers for marketing purposes.</Text>
                                    <Pressable
                                        onPress={() => {
                                            setconfirm_2(prevState => !prevState)
                                        }}
                                        style={{}}>
                                        {
                                            confirm_2 ? <AntDesign name="checkcircleo" size={24} color="white" />
                                                : <Entypo name="circle" size={24} color="white" />
                                        }
                                    </Pressable>
                                </View>
                            </View>

                        </View>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.centeredView}>
            {/* Header */}
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <AntDesign name="arrowleft" size={24} color="white" />
                <Text
                    style={{
                        textAlign: "center",
                        color: "white",
                        justifyContent: "center",
                        alignContent: "center",
                        flex: 1,
                        fontSize: 16,
                    }}
                >
                    Create account
                </Text>
            </View>
            {renderCurrentStage()}
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: "#000",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 21,
        width: 82,
        height: 42,
        backgroundColor: "gray",
    },
    text: {
        marginVertical: 8,
        color: '#fff',
        fontSize: 14
    },
});