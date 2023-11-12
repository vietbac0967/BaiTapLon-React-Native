import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';
const SignUp_1 = () => {
    const navigation = useNavigation()
    const [input, setInput] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    useEffect(() => {
        checkEmail(input)
    }, [input])
    function checkEmail(input) {
        console.log(input.includes('@'));
        if (input.includes('@')) {
            setEmailIsValid(false)
            return
        }
        setEmailIsValid(true)
    }
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
                paddingTop: 15
            }}>
                <View style={{
                    padding: 10,
                    backgroundColor: '#333',
                    borderRadius: 50,
                    marginLeft: 10
                }}>
                    <AntDesign name="left" size={24} color="#fff" />
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        alignItems: 'center',
                        color: '#fff',
                        fontWeight: '700'
                    }}>Create account</Text>
                <View></View>
            </View>
            <View>
                <Text
                    style={{
                        color: '#FFFFFF',
                        fontSize: 24,
                        fontWeight: '700',
                    }}>What’s your email?</Text>
                <TextInput style={{
                    borderWidth: 1,
                    height: 50,
                    backgroundColor: '#777777',
                    color: '#fff',
                    fontSize: 18,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: !emailIsValid ? '777777' : 'red'
                }} onChangeText={(value) => setInput(value)} />
                <Text style={{ color: '#FFFFFF', fontSize: 14, paddingTop: 10 }}>You’ll need to confirm this email later.</Text>
            </View>

            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 20
            }}>
                <Pressable
                    onPress={() => {
                        if (input.includes('@')) {
                            navigation.navigate('register_2')
                        }
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
                    <Text style={{
                        textAlign: 'center',
                        color: '#000000',
                        fontWeight: '500'
                    }}>Next</Text>
                </Pressable>
            </View>
        </View >
    )
}

export default SignUp_1

const styles = StyleSheet.create({})