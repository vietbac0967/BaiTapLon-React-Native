import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';
const SignUp_3 = () => {
    const navigation = useNavigation()
    const [gender, setGender] = useState('');
    useEffect(() => {
        console.log('check gender');
    }, [gender])
    console.log(gender);
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#262626',
            paddingHorizontal: 15,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 15,

            }}>
                <View style={{
                    padding: 10,
                    backgroundColor: '#333',
                    borderRadius: 50,
                    marginLeft: 10,
                }}>
                    <Pressable
                        onPress={() => navigation.navigate('register_1')}

                    >
                        <AntDesign name="left" size={24} color="#fff" />

                    </Pressable>
                </View>
                <Text style={{
                    fontSize: 18,
                    alignItems: 'center',
                    color: '#fff',
                    fontWeight: '700'
                }}>Create account</Text>
                <View></View>
            </View>
            <View style={{
                marginTop: 10
            }}>
                <Text style={{ color: '#FFFFFF', fontSize: 24 }}>What's your gender</Text>
                <TextInput style={{
                    borderWidth: 1,
                    height: 50,
                    backgroundColor: '#777777',
                    color: '#fff',
                    fontSize: 18,
                    borderRadius: 5
                }} onChangeText={(value) => setGender(value)} />
            </View>

            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 20
            }}>
                <Pressable
                    onPress={() => {
                        navigation.navigate('register_4')
                    }}
                    style={{
                        backgroundColor: 'red',
                        height: 42,
                        width: 82,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        backgroundColor: '#535353'
                    }}>
                    <Text style={{ textAlign: 'center', color: '#333', fontWeight: '500' }}>Next</Text>
                </Pressable>
            </View>
        </View >
    )
}

export default SignUp_3

const styles = StyleSheet.create({})