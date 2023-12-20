import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { colors, hr80, titles, txtInputContainer, loginSignupBtn, loginSignupTxt, baseView, gfContainer, txtInput, container } from '../../globals/styling';

export default function LoginScreen({ navigation }) {
    const [emailFocus, setEmailFocus] = useState(false)
    const [focusUser, setFocusUser] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [focusConPassword, setFocusConPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [focusPhone, setFocusPhone] = useState(false)

    return (
        <View style={container}>
            <Text style={styles.headTxt}>Sign up</Text>
            <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'center' }}>
                <View style={txtInputContainer}>
                    <AntDesign name="mail" size={22} color={emailFocus == false ? 'black' : 'red'} />
                    <TextInput placeholder='Email' style={txtInput} onFocus={() => {
                        setFocusUser(false);
                        setFocusPassword(false);
                        setShowPassword(false);
                        setFocusConPassword(false);
                        setFocusPhone(false);
                        setEmailFocus(true);
                    }} />
                </View>

                <View style={txtInputContainer}>
                    <AntDesign name="user" size={22} color={focusUser == false ? 'black' : 'red'} />
                    <TextInput placeholder='Username' style={txtInput} onFocus={() => {
                        setFocusUser(true);
                        setFocusPassword(false);
                        setShowPassword(false);
                        setFocusConPassword(false);
                        setFocusPhone(false);
                        setEmailFocus(false);
                    }} />
                </View>
                <View style={txtInputContainer}>
                    <AntDesign name="key" size={22} color={focusPassword == false ? 'black' : 'red'} />
                    <TextInput placeholder='Password' style={txtInput} onFocus={() => {
                        setFocusUser(false);
                        setFocusPassword(true);
                        setShowPassword(false);
                        setFocusConPassword(false);
                        setFocusPhone(false);
                        setEmailFocus(false);
                    }}
                        secureTextEntry={showPassword == false ? true : false}
                    />
                    <TouchableOpacity>
                        <Feather name={showPassword == false ? 'eye-off' : 'eye'} size={24} color="black" onPress={() => { setShowPassword(!showPassword) }} />
                    </TouchableOpacity>


                </View>

                <View style={txtInputContainer}>
                    <AntDesign name="key" size={22} color={focusConPassword == false ? 'black' : 'red'} />
                    <TextInput placeholder='Confirm password' style={txtInput} onFocus={() => {
                        setFocusUser(false);
                        setFocusPassword(false);
                        setShowPassword(false);
                        setFocusConPassword(true);
                        setFocusPhone(false);
                        setEmailFocus(false);
                    }}
                        secureTextEntry={showPassword == false ? true : false}
                    />
                    <TouchableOpacity>
                        <Feather name={showPassword == false ? 'eye-off' : 'eye'} size={24} color="black" onPress={() => { setShowPassword(!showPassword) }} />
                    </TouchableOpacity>


                </View>

                <View style={txtInputContainer}>
                    <AntDesign name="phone" size={22} color={focusPhone == false ? 'black' : 'red'} />
                    <TextInput placeholder='Contact number' style={txtInput} onFocus={() => {
                        setFocusUser(false);
                        setFocusPassword(false);
                        setShowPassword(false);
                        setFocusConPassword(false);
                        setFocusPhone(true);
                        setEmailFocus(false);
                    }} />
                </View>

                <TouchableOpacity style={loginSignupBtn}>
                    <Text style={loginSignupTxt}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style={baseView}>
                <View style={styles.newSignIn}>
                    <Text style={{ fontSize: titles.txt3 }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('loginPage')}><Text style={{ fontSize: titles.txt3, color: colors.col3 }}> Sign in</Text></TouchableOpacity>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <View style={hr80}></View>
                </View>
                <View style={styles.orView}>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>OR</Text>
                </View>
                <View style={styles.signInWithGf}>
                    <Text style={{ fontSize: titles.txt3, letterSpacing: 0.25, color: colors.col1 }}>Sign in with:</Text>
                </View>
                <View style={gfContainer}>
                    <TouchableOpacity style={styles.gfBtn}>
                        <AntDesign name="google" size={35} color="#ed6111" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gfBtn}>
                        <AntDesign name="facebook-square" size={35} color="blue" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* <StatusBar barStyle={'light-content'} backgroundColor={'black'} /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    headTxt: { fontSize: titles.txt1, color: colors.col1, fontWeight: '700', alignSelf: 'center', marginVertical: 30, fontFamily: 'serif' },

    newSignIn: { flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 24 },

    orView: { alignItems: 'center', marginTop: 16 },
    signInWithGf: { alignItems: 'center', marginTop: 7 },

    gfBtn: { margin: 16, borderRadius: 14, backgroundColor: colors.colMain, elevation: 7, padding: 4 }

})