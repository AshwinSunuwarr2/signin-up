import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { IconStyle, colors, titles } from '../globals/styling'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <Feather name="search" size={24} color="black" style={IconStyle} />
            <TextInput placeholder='Search' style={styles.searchInput} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar: { padding: 10, margin: 7, backgroundColor: colors.col2, elevation: 4, borderRadius: 26, flex: 0, flexDirection: 'row', alignItems: 'center', width: '92%', alignSelf: 'center' },
    searchInput: { fontSize: titles.txt3, padding: 4, width: '90%' }
})