import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { colors, titles } from '../globals/styling';

const Categories = () => {
    return (
        <View style={styles.categories}>
            <Text style={styles.categoryTxt}>Categories</Text>
            <View style={styles.hrSmall}></View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryContents}>
                    <MaterialIcons name="category" size={45} color="black" style={styles.catImage} />
                    <Text style={styles.catTitle}>img title................................</Text>
                </View>

                <View style={styles.categoryContents}>
                    <MaterialIcons name="category" size={45} color="black" style={styles.catImage} />
                    <Text style={styles.catTitle}>img title</Text>
                </View>
                <View style={styles.categoryContents}>
                    <MaterialIcons name="category" size={45} color="black" style={styles.catImage} />
                    <Text style={styles.catTitle}>img title</Text>
                </View>
                <View style={styles.categoryContents}>
                    <MaterialIcons name="category" size={45} color="black" style={styles.catImage} />
                    <Text style={styles.catTitle}>img title</Text>
                </View>
                <View style={styles.categoryContents}>
                    <MaterialIcons name="category" size={45} color="black" style={styles.catImage} />
                    <Text style={styles.catTitle}>img title</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    categories: { flex: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', margin: 7, backgroundColor: colors.colGrey, borderRadius: 10, width: '92%', alignSelf: 'center', height: 145, padding: 4 },

    categoryTxt: { fontSize: titles.txt2, color: colors.col2, margin: 7 },
    hrSmall: { borderWidth: 0.5, width: '25%', alignSelf: 'center', borderColor: colors.col3, margin: 2, elevation: 4 },

    categoryContents: { marginHorizontal: 8, borderRadius: 10, backgroundColor: colors.colMain, width: 135, height: 65, flex: 0, flexDirection: 'row', padding: 4, alignItems: 'center', marginTop: 14, elevation: 4, justifyContent: 'center' },
    catImage: { backgroundColor: colors.colMain, margin: 4, width: 50, height: '100%', borderRadius: 16 },
    catTitle: { backgroundColor: colors.colMain, width: '53%', fontSize: titles.txt4, height: '52%', alignContent: 'center' }
})