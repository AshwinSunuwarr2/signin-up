import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors, hr80, titles, forgot } from '../../globals/styling';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.headTxt}>Login</Text>
            <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'center', height: '55%' }}>
                <View style={styles.txtInputContainer}>
                    <AntDesign name="user" size={24} color="black" />
                    <TextInput placeholder='Username' style={styles.txtInput} />
                </View>
                <View style={styles.txtInputContainer}>
                    <AntDesign name="key" size={24} color="black" />
                    <TextInput placeholder='Password' style={styles.txtInput} />
                </View>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginTxt}>Login</Text>
                </TouchableOpacity>

                <View style={styles.forgotView}>
                    <TouchableOpacity>
                        <Text style={forgot}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={hr80}></View>
            </View>

            <View style={styles.orView}>
                <Text style={{ fontSize: 18, fontWeight: '400' }}>OR</Text>
            </View>
            <View style={styles.signInWithGf}>
                <Text style={{ fontSize: titles.txt3, letterSpacing: 0.25, color: colors.col1 }}>Signin with:</Text>
            </View>
            <View style={styles.gfContainer}>
                <TouchableOpacity style={styles.gfBtn}>
                    <AntDesign name="google" size={42} color="#ed6111" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gfBtn}>
                    <AntDesign name="facebook-square" size={42} color="blue" />
                </TouchableOpacity>
            </View>

            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column' },
    headTxt: { fontSize: titles.txt1, color: colors.col1, fontWeight: '700', alignSelf: 'center', marginTop: 100, fontFamily: 'serif' },
    txtInputContainer: { flex: 0, flexDirection: 'row', borderWidth: 1, margin: 10, borderRadius: 25, alignItems: 'center', padding: 4, width: '85%', alignSelf: 'center' },
    txtInput: { padding: 7, fontSize: titles.txt3 },

    loginBtn: { backgroundColor: colors.col1, width: '85%', borderRadius: 25, alignItems: 'center', alignSelf: 'center', margin: 4, elevation: 6 },
    loginTxt: { fontSize: titles.txt2, color: colors.col2, padding: 7, fontWeight: '700', letterSpacing: 0.5 },

    forgotView: { alignItems: 'center', padding: 14, marginBottom: 15 },
    orView: { alignItems: 'center' },
    signInWithGf: { alignItems: 'center', marginTop: 7 },
    gfContainer: { flex: 0, flexDirection: 'row', alignItems: 'center', margin: 7, padding: 15, justifyContent: 'center' },
    gfBtn: { margin: 11, elevation: 10 }

})