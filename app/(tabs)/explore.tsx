import { View,Text,TextInput,ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from '@expo/vector-icons';

export default function exploreScreen() {
  return (
    <ScrollView>
  <View style={{backgroundColor:'white',marginTop:25}}>
      <View style={styles.search}>
      <Ionicons name="search" size={22} color="black" />
      <TextInput
      style={styles.searchContainer}
        placeholder="Search"
        placeholderTextColor="#999" // Customize placeholder color
      />
              </View>
      <View style={styles.MainContainer}>
        <View style={styles.ColoumnContainer}>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
          <View style={[styles.post,styles.tallPost]}></View>
        </View>
        <View style={styles.ColoumnContainer}>
          <View style={styles.post}></View>
          <View style={[styles.post,styles.tallPost]}></View>
          <View style={styles.post}></View>
          <View style={styles.post}></View>

        </View>
        <View style={styles.ColoumnContainer}>
          <View style={[styles.post,styles.tallPost]}></View>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent:'center',
    flexDirection: "row",
    gap: 5,
  },
  ColoumnContainer: {
    width: "35%",
    gap:5,
  },
  post: {
    width: "100%",
    height: 200,
    backgroundColor: 'whitesmoke',
  },
  tallPost:{
    height:300,
  },
  search:{
    margin:10,
    flexDirection:'row',
    justifyContent:'space-around',
    // borderWidth:1,
    height:40,
    backgroundColor:'lightgrey',
    alignItems:'center',
    color:'grey',
    borderRadius:4
  },
  searchContainer:{
    width:'80%',
    fontSize:16,
    margin:10,
    fontWeight:'bold'
  }
});
