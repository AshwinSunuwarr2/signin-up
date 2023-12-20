import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { container } from './globals/styling'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import Suggestions from './components/Suggestions'

const Home = () => {
  return (
    <View style={container}>
      <NavBar />

      <SearchBar />

      <Categories />

      <Suggestions />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})