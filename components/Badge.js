import { StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";

export default function Badge({ title }) {
  return (
    <Pressable
      style={{
        backgroundColor: "#121212",
        padding: 10,
        borderRadius: 45,
        border: "0.6px solid #7F7F7F",
        height: 33,
        width: "auto",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: "white",
          fontWeight: 500,
          padding: 4,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
