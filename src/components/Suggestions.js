import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors, titles } from '../globals/styling'

const Suggestions = () => {
    return (
        <View style={styles.swiperContainer}>
            <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true} dotColor='white' activeDotColor='red'
                nextButton={<Text style={styles.nextPrevBtn}>›</Text>}
                prevButton={<Text style={styles.nextPrevBtn}>‹</Text>}>

                <View style={styles.swipeImgContainer}>
                    <Image source={require('../../images/pic1.jpg')} style={styles.swipeImgStyle} />
                </View>

                <View style={styles.imgContainer}>
                    <Image source={require('../../images/pic2.jpg')} style={styles.swipeImgStyle} />
                </View>

                <View style={styles.imgContainer}>
                    <Image source={require('../../images/pic3.jpg')} style={styles.swipeImgStyle} />
                </View>

                <View style={styles.imgContainer}>
                    <Image source={require('../../images/pic4.jpg')} style={styles.swipeImgStyle} />
                </View>

            </Swiper>
        </View>
    )
}

export default Suggestions

const styles = StyleSheet.create({
    swiperContainer: { backgroundColor: colors.colMain, height: 200, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 26 },

    swipeImgContainer: { height: 200, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.colMain, borderRadius: 26, backgroundColor: colors.colMain },
    swipeImgStyle: { width: '100%', height: 200, borderRadius: 26 },
    nextPrevBtn: { color: 'grey', fontSize: 45, fontWeight: 'bold', backgroundColor: colors.colMain, width: 35, height: 35, borderRadius: 20, lineHeight: 42, textAlign: 'center' }
})