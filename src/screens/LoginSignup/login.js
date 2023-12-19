import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { colors, hr80, titles, forgot, txtInputContainer, loginSignupBtn, loginSignupTxt, baseView, newSIgnIn, gfContainer, txtInput } from '../../globals/styling';

export default function LoginScreen({ navigation }) {
    const [focusUser, setFocusUser] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.headTxt}>Login</Text>
            <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'center', marginTop: 65 }}>
                <View style={txtInputContainer}>
                    <AntDesign name="user" size={22} color={focusUser == false ? 'black' : 'red'} />
                    <TextInput placeholder='Username' style={txtInput} onFocus={() => {
                        setFocusUser(true);
                        setFocusPassword(false);
                        setShowPassword(false);
                    }} />
                </View>
                <View style={txtInputContainer}>
                    <AntDesign name="key" size={22} color={focusPassword == false ? 'black' : 'red'} />
                    <TextInput placeholder='Password' style={txtInput} onFocus={() => {
                        setFocusUser(false)
                        setFocusPassword(true)
                    }}
                        secureTextEntry={showPassword == false ? true : false}
                    />
                    <TouchableOpacity>
                        <Feather name={showPassword == false ? 'eye-off' : 'eye'} size={24} color="black" onPress={() => { setShowPassword(!showPassword) }} />
                    </TouchableOpacity>


                </View>

                <TouchableOpacity style={loginSignupBtn}>
                    <Text style={loginSignupTxt}>Login</Text>
                </TouchableOpacity>

                <View style={styles.forgotView}>
                    <TouchableOpacity>
                        <Text style={forgot}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={baseView}>
                <View style={newSIgnIn}>
                    <Text style={{ fontSize: titles.txt3 }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signupPage')}><Text style={{ fontSize: titles.txt3, color: colors.col3 }}> Sign up</Text></TouchableOpacity>
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
    container: { flex: 1, flexDirection: 'column', backgroundColor: '#c5f0d4' },
    headTxt: { fontSize: titles.txt1, color: colors.col1, fontWeight: '700', alignSelf: 'center', marginTop: 100, fontFamily: 'serif' },

    // txtInput: { padding: 7, fontSize: titles.txt3, width: '82%' },

    forgotView: { alignItems: 'center', padding: 14, marginBottom: 15, marginTop: 10 },
    orView: { alignItems: 'center', marginTop: 16 },
    signInWithGf: { alignItems: 'center', marginTop: 7 },

    gfBtn: { margin: 16, borderRadius: 14, backgroundColor: '#c5f0d4', elevation: 7, padding: 4 }

})