import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
export default function InputField({ textTitle, message }) {
  return (
    <View style={{ marginLeft: 10, marginVertical: 10, position: 'relative' }}>
      <View style={{ position: 'absolute', bottom: 25, right: 25 }}>
        <AntDesign name="check" size={24} color="#fff" />
      </View>
      <Text style={{ fontSize: 20, color: "white", fontWeight: '700' }}>{textTitle}</Text>
      <TextInput
        keyboardAppearance
        keyboardType="email-address"
        style={{
          width: 365,
          height: 51,
          backgroundColor: "gray",
          borderRadius: 5,
        }}
      ></TextInput>
      <Text style={{ fontSize: 8, color: "white", marginTop: 3 }}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
