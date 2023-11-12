import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import { Pressable } from 'react-native';
const SignUp_4 = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [confirm_1, setconfirm_1] = useState(false);
    const [confirm_2, setconfirm_2] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
        checkFormIsValid()
    }, [name, confirm_1, confirm_2])
    function checkFormIsValid() {
        console.log(confirm_1)
        console.log(confirm_2)
        console.log(confirm_1 && confirm_2)
        if (confirm_1 && confirm_2) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
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
            <View>
                <Text style={{
                    color: '#FFFFFF',
                    fontSize: 24,
                    fontWeight: '700',
                }}>What's your name?</Text>
                <TextInput style={{
                    borderWidth: 1,
                    height: 50,
                    backgroundColor: '#777777',
                    color: '#fff',
                    fontSize: 18,
                    borderRadius: 5
                }} onChangeText={(value) => setPassword(value)} />
                <Text style={{ color: '#FFFFFF', fontSize: 14 }}>This appears on your spotify profile</Text>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: '#fff', marginTop: 20 }}></View>
            <Text style={[styles.text]}>By tapping on “Create account”, you agree to the spotify Terms of Use.</Text>
            <Text style={[styles.secondText, { paddingTop: 20 }]}>Terms of Use</Text>
            <Text style={[styles.text, { paddingTop: 20 }]}>To learn more about how Spotify collect, uses, shares and protects your personal data, Please see the Spotify Privacy Policy.</Text>
            <Text style={[styles.secondText, { paddingVertical: 20 }]}>Privacy Policy</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text}>Please send me news and offers from Spotify.</Text>
                <Pressable
                    onPress={() => {
                        setconfirm_1(prevState => !prevState)
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
            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 100
            }}>
                <Pressable
                    onPress={() => {
                        if (formIsValid) {
                            console.log(formIsValid)
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
                        color: '#333',
                        backgroundColor: '#fff',
                        fontWeight: '500',
                        padding: 10,
                        width: 180,
                        height: 50,
                        borderRadius: 25,
                        fontWeight: '700'
                    }}>
                        Create an account
                    </Text>
                </Pressable>
            </View>
        </View >
    )
}

export default SignUp_4

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    },
    secondText: {
        color: 'green'
    }
})