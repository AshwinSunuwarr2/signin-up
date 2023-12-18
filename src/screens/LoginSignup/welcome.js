import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { colors, hr80, titles } from '../../globals/styling';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeTxt}>welcome to my App</Text>
            <View style={styles.imgContainer}>
                <Image source={require('../../../assets/welcome.png')} style={styles.welcomeImage} />
            </View>
            <View style={hr80}></View>
            <Text style={styles.appDescription}>This is Our App. What you think we can create!!</Text>
            <View style={hr80}></View>

            <View style={styles.signBtns}>
                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('loginPage')}>
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('signupPage')}>
                    <Text style={styles.btnTxt}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%', flexDirection: 'column', backgroundColor: '#c5f0d4' },
    welcomeTxt: { fontSize: titles.txt1, fontWeight: '700', fontFamily: 'serif', padding: 9, alignSelf: 'center', color: colors.col1, textShadowColor: 'rgba(0,0,0,0.4)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 12 },
    imgContainer: { width: '100%', alignItems: 'center', justifyContent: 'center', height: '55%' },
    welcomeImage: { width: '98%', resizeMode: 'contain', height: '100%' },
    appDescription: { fontSize: titles.txt3, margin: 4, alignSelf: 'center', width: '78%', color: '#39453d' },
    signBtns: { flex: 0, flexDirection: 'row', justifyContent: 'space-around', marginVertical: 30 },
    btnStyle: { backgroundColor: 'green', borderRadius: 28, width: 160, padding: 12, alignItems: 'center', elevation: 6 },
    btnTxt: { fontSize: 18, fontWeight: '700', color: colors.col2, letterSpacing: 0.5 }
})