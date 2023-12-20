import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppName, IconStyle, colors } from '../globals/styling'
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';

const NavBar = () => {
    return (
        <View style={styles.navBar}>
            <Feather name="menu" size={24} color="black" style={IconStyle} />
            <View style={styles.appNameIcon}>
                <Text style={AppName}>My app</Text>
                <AntDesign name="solution1" size={24} color="black" style={IconStyle} />
            </View>
            <FontAwesome name="user-circle" size={24} color="black" style={IconStyle} />
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    navBar: { flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 34, backgroundColor: colors.col2, padding: 7, borderBottomLeftRadius: 18, borderBottomRightRadius: 26, elevation: 4 },
    appNameIcon: { flex: 0, flexDirection: 'row', alignItems: 'center' },

})