import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
const PremiumScreen = () => {
    const data = [
        {
            id: 1,
            description: 'Listen offline without Wi-Fi or mobile data',
        },
        {
            id: 2,
            description: 'Play songs in any order',
        },
        {
            id: 3,
            description: 'Music without ad interruptions',
        },
        {
            id: 4,
            description: 'Higher sound quality',
        }
    ]
    const [description, setDescription] = useState(data);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black', paddingBottom: 80 }}>
            <View style={{
                marginHorizontal: 20
            }}>
                <ImageBackground source={{}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="spotify" size={24} color="white" />
                        <Text style={{ color: '#fff', marginLeft: 10 }}>Premium</Text>
                    </View>
                    <Text style={{ textTransform: 'uppercase', color: '#fff' }}>Free trial</Text>
                    <Text style={{ fontSize: 24, color: '#fff' }}>Try Premium free for 1 month</Text>
                </ImageBackground>
            </View>
            <View style={{
                backgroundColor: 'black',
                marginHorizontal: 20
            }}>
                <Pressable style={{
                    borderRadius: 15,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 45,
                    marginHorizontal: 25,
                    borderRadius: 20,
                    marginVertical: 10
                }}>
                    <Text style={[{ textTransform: 'uppercase', fontWeight: '700' }]}>get premium</Text>
                </Pressable>
                <Text style={[styles.txt, { fontSize: 12, marginHorizontal: 5 }]}>Only 59,000₫/month after. Offer only for users who are new to Premium </Text>
                <Text style={{ color: '#F4EAE0' }}>Terms apply</Text>
            </View>
            <View style={{ backgroundColor: '#272829', marginHorizontal: 20, borderRadius: 15, padding: 10, marginVertical: 10 }}>
                <Text style={{ color: '#fff' }}>Why join Premium?</Text>
                <View style={{ borderWidth: Dimensions.get, borderColor: '#fff' }}></View>
                <View style={{
                }}>
                    {
                        description.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        marginVertical: 10
                                    }}>
                                    <AntDesign name="check" size={24} color="green" />
                                    <Text style={{ marginLeft: 15, color: '#fff' }}>{item.description}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View style={{
                backgroundColor: '#272829',
                marginHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 15,
                borderRadius: 10
            }}>
                <Text style={{ paddingLeft: 18, color: '#fff', fontSize: 18 }}>Spotify Free</Text>
                <Text style={{ textTransform: 'uppercase', paddingRight: 20, color: '#fff', fontSize: 12 }}>current plan</Text>
            </View>
            <Text style={[styles.txt, { marginHorizontal: 20, marginVertical: 25, fontSize: 20 }]}>Pick your Premium</Text>

            <View style={{
                borderRadius: 5,
                backgroundColor: '#0766AD',
                marginHorizontal: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    alignItems: 'center',

                }}>
                    <Text style={{
                        paddingLeft: 20,
                        fontSize: 16,
                        color: '#fff'
                    }}>Mini</Text>
                    <View style={{
                        paddingRight: 15
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: '#fff'
                        }}>From 2,300₫</Text>
                        <Text style={{
                            textTransform: 'uppercase',
                            color: '#fff'
                        }}>for 1 day</Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        width: '80%',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                        1 day and 1 week  plans · Ad-free music on mobile · Download 30 songs on 1 mobile devide
                        · Mobile only plan
                    </Text>
                    <Pressable style={{
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        marginVertical: 10
                    }}>
                        <Text style={{ textTransform: 'uppercase', color: 'black', fontWeight: '700' }}>view plans</Text>
                    </Pressable>
                    <Text style={{
                        marginVertical: 10,
                        color: '#fff'
                    }}>
                        Terms and Conditions apply.
                    </Text>
                </View>
            </View>


        </ScrollView >

    )
}

export default PremiumScreen

const styles = StyleSheet.create({
    txt: {
        color: 'white'
    }
})