import { SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const SearchResultScreen = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);
    const [type, setType] = useState('artist');
    const [activeIndex, setActiveIndex] = useState(0);
    const [banner, setBanner] = useState([
        {
            id: 0,
            name: 'artist',
            func: () => {
                setType('artist')
            }
        },
        {
            id: 1,
            name: 'album',
            func: () => {
                setType('album')
            }
        },
        {
            id: 2,
            name: 'playlist',
            func: () => {
                setType('playlist')
            }
        },
    ])
    useEffect(() => {
        find(input, type)
        return () => {
        };
    }, [input, type]);
    const find = async (input, type) => {
        const accessToken = await AsyncStorage.getItem("token");
        console.log('token', accessToken);
        try {
            const response = await axios({
                method: "GET",
                url: `https://api.spotify.com/v1/search?q=${input}&type=${type}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (type === 'artist') {
                const res = response.data.artists.items
                console.log(res);
                setResult(res);
            } else if (type === 'album') {
                const res = response.data.albums.items
                console.log(res);
                setResult(res);
            } else if (type === 'playlist') {
                const res = response.data.playlists.items
                console.log(res);
                setResult(res);
            }

        } catch (err) {
            console.log(err.message);
        }
    }

    function Nothing() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                width: '100%',
            }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Play what you love</Text>
                <Text style={{ color: 'gray' }}>Search for artists, songs, podcasts, and more</Text>
            </View>
        )
    }
    function HandlerPressBanner(index) {
        setActiveIndex(index)
        banner[index].func()
    }
    function Banner() {
        return (
            <ScrollView
                horizontal={true}
                style={{ flexDirection: 'row' }}>
                {banner.map((item, index) => {
                    return (
                        <View
                            key={item.id}
                            style={{ flexDirection: 'row' }}>
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed ? 'blue' : activeIndex === index ? 'green' : 'gray',
                                        paddingHorizontal: 20,
                                        paddingVertical: 10,
                                        margin: 5,
                                        borderRadius: 20,
                                    },
                                ]}

                                onPress={() => HandlerPressBanner(index)}>
                                <Text style={{ color: '#fff' }}>{item.name}</Text>
                            </Pressable>
                        </View>

                    );
                })
                }
            </ScrollView >
        )
    }
    function Result() {
        let component;
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        console.log(result);
        if (type === 'artist') {
            component = <ScrollView>
                {
                    result.map((item, index) => {
                        if (item.images[0] === undefined) return
                        // console.log(item);
                        return (
                            <Pressable
                                onPress={() => navigation.navigate("Album", { id: item.id, url: item.images[0].url, name: item.name })}
                            >
                                <View
                                    style={{
                                        paddingHorizontal: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginVertical: 5
                                    }}
                                    key={index}
                                >
                                    <Image
                                        style={{ width: 50, height: 50, borderRadius: 50, marginRight: 10 }}
                                        source={{ uri: item.images[0].url }} />
                                    <Text style={{ fontSize: 18, color: '#D8D9DA' }}>{item.name}</Text>
                                    <MaterialIcons name="verified" size={24} color="blue" />
                                </View>
                            </Pressable>

                        )
                    })
                }
            </ScrollView>
        } else if (type === 'album') {
            component = <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100 %',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {
                    result.map((item) => {
                        console.log(item.id);
                        const dateString = item.release_date
                        const dateObject = new Date(dateString);
                        const year = dateObject.getFullYear();
                        if (item.images[0] === undefined) return
                        return (
                            <Pressable
                            >
                                <View style={{ width: windowWidth / 2 - 20, marginVertical: 10 }}>
                                    <Image
                                        style={{ width: 160, height: 160 }}
                                        source={{ uri: item.images[0].url }} />
                                    <Text style={{ color: '#D8D9DA', fontSize: 14, fontWeight: '700' }}>{item.name}</Text>
                                    <Text style={{ color: '#D8D9DA' }}>{ }</Text>
                                    <Text style={{ width: 100, color: '#D8D9DA' }}>{item.type} · {year}</Text>

                                </View>
                            </Pressable>

                        )
                    })
                }
            </View>
        } else if (type === 'playlist') {
            component = <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100 %',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {
                    result.map((item) => {
                        const dateString = item.release_date
                        const dateObject = new Date(dateString);
                        const year = dateObject.getFullYear();
                        if (item.images[0] === undefined) return
                        return (
                            <Pressable
                            >
                                <View style={{ width: windowWidth / 2 - 20, marginVertical: 10 }}>
                                    <Image
                                        style={{ width: 160, height: 160 }}
                                        source={{ uri: item.images[0].url }} />
                                    <Text style={{ color: '#D8D9DA', fontSize: 14, fontWeight: '700' }}>{item.name}</Text>
                                </View>
                            </Pressable>

                        )
                    })
                }
            </View>
        }
        return (component)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0F0F0F', paddingTop: 5 }}>
            <View style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flex: 1,
                    backgroundColor: '#393646',
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 10,
                    paddingVertical: 5,

                }}>
                    <Feather name="search" size={18} color="black" style={{ paddingHorizontal: 10 }} />
                    <TextInput
                        onChangeText={(value) => setInput(value)}
                        style={{ outlineStyle: 'none', flex: 1, height: 30, fontSize: 16, color: '#D8D9DA' }}
                        placeholder='Search' />

                </View>
                <Pressable
                    onPress={() => navigation.navigate('Search')}
                    style={{
                        marginRight: 10
                    }}>
                    <Text style={{ color: '#D8D9DA' }}>Cancel</Text>
                </Pressable>
            </View>
            <View style={{ flex: 1 }}>
                {
                    input.length > 0 ? (
                        <ScrollView>
                            <Banner />
                            <Result />
                        </ScrollView>
                    ) : (
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Nothing />
                        </View>
                    )
                }
            </View>
            <StatusBar />
        </SafeAreaView >
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({})