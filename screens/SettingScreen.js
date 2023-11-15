import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
    const select = [
        {
            id: 1,
            name: 'Account',
            onclick: () => { console.log(123) }
        },
        {
            id: 2,
            name: 'Data Saver',
            onclick: () => { console.log(123) }
        },
        {
            id: 3,
            name: 'Languages',
            onclick: () => { console.log(123) }
        },
        {
            id: 4,
            name: 'Playback',
            onclick: () => { console.log(123) }
        },
        {
            id: 5,
            name: 'Explicit Content',
            onclick: () => { console.log(123) }
        },
        {
            id: 6,
            name: 'Devices',
            onclick: () => { console.log(123) }
        },
        {
            id: 7,
            name: 'Car',
            onclick: () => { console.log(123) }
        },
        {
            id: 8,
            name: 'Social',
            onclick: () => { console.log(123) }
        },
        {
            id: 9,
            name: 'Voice Assistant & Apps',
            onclick: () => { console.log(123) }
        },
        {
            id: 10,
            name: 'Audio Quality',
            onclick: () => { console.log(123) }
        },
        {
            id: 11,
            name: 'Storage',
            onclick: () => { console.log(123) }
        },
    ]
    function Row({ item }) {
        console.log(item);

        return <Pressable onPress={item.onclick}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                <Text style={{ color: '#B3B3B3', fontSize: 18 }}>{item.name}</Text>
                <AntDesign name="right" size={24} color="white" />
            </View>
        </Pressable>

    }
    return (
        <View style={{ backgroundColor: '#333', flex: 1, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <AntDesign name="left" size={24} color="gray" style={{}} />
                <Text style={{ fontWeight: '700', fontSize: 16, color: 'white' }}>Settings</Text>
                <View></View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 30,
                alignItems: 'center'
            }}>
                <View style={{ flexDirection: 'row', }}>
                    <Image
                        style={{
                            width: 60, height: 60, borderRadius: 50
                        }}
                        source={{ uri: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg' }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'white' }}>maya</Text>
                        <Text style={{ color: 'gray' }}>View Profile</Text>
                    </View>
                </View>
                <AntDesign name="right" size={24} color="white" />
            </View>
            <FlatList renderItem={({ item }) => <Row item={item} />} data={select} />
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({})