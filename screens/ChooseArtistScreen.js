import { StyleSheet, Text, View, FlatList, TextInput, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';
const ChooseArtistScreen = () => {
    const [artists, setArtists] = useState([]);
    const [accessToken, setAccessToken] = useState('');
    const [Input, setInput] = useState('');
    const [selectArtist, setselectArtist] = useState([]);
    const [clientId, setClientId] = useState('55a38015100e40a1bc86447cf06b5100');
    const [clientSecret, setClientSecret] = useState('d183339823374756b845d650bc353489');
    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                const token = await getAccessToken(clientId, clientSecret);
                setAccessToken(token);
                console.log(token);
            } catch (error) {
                console.error('Error getting access token:', error);
            }
        };

        fetchAccessToken();
    }, [clientId, clientSecret]);
    useEffect(() => {
        const findArtist = async () => {
            try {
                await getArtist(Input);
            } catch (error) {
                console.error('Error getting artist:', error);
            }
        };

        findArtist(Input);
    }, [Input]);
    async function getAccessToken(clientId, clientSecret) {
        const authString = btoa(`${clientId}:${clientSecret}`);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials',
        };

        try {
            const response = await fetch('https://accounts.spotify.com/api/token', requestOptions);
            const data = await response.json();
            const token = data.access_token;
            return token;
        } catch (error) {
            console.error('Error getting access token:', error);
            throw error; // Rethrow the error to handle it in the calling function
        }
    }

    async function getArtist(input) {
        // console.log(accessToken);

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        };

        try {
            if (input === '') setInput('a')
            const response = await fetch(`https://api.spotify.com/v1/search?q=${input}&type=artist`, requestOptions);
            // console.log(response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setArtists(data.artists.items);
            // console.log('Danh sách nghệ sĩ:', data.artists.items);
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
        }
    }
    console.log(selectArtist);

    function Item({ item }) {
        let url = ''
        if (item.images[1] === undefined) return
        else {
            // console.log(item.images[0]);
            url = item.images[0].url
        }
        return (
            <Pressable
                onPress={() => {
                    if (selectArtist.length === 3 || selectArtist.includes(item.id)) {
                        return
                    }
                    console.log(item.id);
                    setselectArtist([...selectArtist, item.id])
                    console.log(selectArtist);
                }}>
                <View style={{
                    // backgroundColor: '#333',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    flex: 1,
                    paddingTop: 10,
                    height: Dimensions.get('window').width / 3,
                    paddingHorizontal: 5
                }}>
                    <Image style={{
                        width: 110,
                        height: 110,
                        borderRadius: 50
                    }} source={{ uri: url }} />
                    <Text style={{ color: 'white', width: 100, height: 20, overflow: 'hidden' }}>{item.name}</Text>
                </View>
            </Pressable>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', marginVertical: 30, justifyContent: 'space-between' }}>
                <AntDesign name="left" size={24} color="#535353" />
                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>Choose 3 or more artists you like.</Text>
                <View></View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#F5F5F5',
                width: '100%',
                borderRadius: 5
            }}>
                <AntDesign name="search1" size={24} color="black" style={{ marginLeft: 10 }} />
                <TextInput

                    onChangeText={(value) => setInput(value)}
                    placeholder='Search'
                    style={{
                        paddingHorizontal: 20,
                        height: 50,
                        fontSize: 16,
                        width: '100%',
                        outlineStyle: 'none',
                        fontSize: 16
                    }} />

            </View>
            <FlatList
                numColumns={3}
                data={artists}
                renderItem={({ item }) => <Item item={item} />} />
        </View>
    )
}

export default ChooseArtistScreen

const styles = StyleSheet.create({})