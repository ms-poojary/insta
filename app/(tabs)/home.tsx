// tabs/home.tsx
import { Colors } from "../../constants/Colors";
import React from "react";
import { Ionicons,Feather } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet, ScrollView, Button, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={{backgroundColor:'white',marginTop:25}}>
    <View>

      {/* headding */}
      <View style={styles.tophead}>
        <Text style={styles.textHead}>Instagram</Text>
        <View style={styles.topIcon}>
          <Ionicons name="heart-outline" size={26} color="black" />
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={26}
            color="black"
          />
        </View>
      </View>

      {/* story section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imagecontainer}>
          <View style={styles.story}>
            <Image
              source={require("@/assets/images/girl.jpeg")}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text>Your Story</Text>
          </View>

          <View style={styles.story}>
            <Image
              source={require("@/assets/images/girl5.jpeg")}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text>_Aish04_.</Text>
          </View>

          <View style={styles.story}>
            <Image
              source={require("@/assets/images/girl4.jpeg")}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text>Shivani123</Text>
          </View>
          <View style={styles.story}>
            <Image
              source={require("@/assets/images/girl3.jpeg")}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text>ms-Angle_x</Text>
          </View>
        </View>
      </ScrollView>

      {/* older_post */}
    <View style={styles.suggBox}>
    <View style={styles.suggParagraph} >
      <Ionicons name="checkmark-circle-outline" size={30} color="deeppink" />
        <Text >You've sen all new posts from the
           past 3 days from accouts you follow</Text>
      </View>
      <View style={styles.Suggest}>
        <Text style={{fontWeight:'bold',fontSize:18}}>Suggested for You</Text>
        <Text style={{color:'deepskyblue',fontSize:15}}>Older Posts</Text>
      </View>
    </View>


{/* post */}
<View>
<View style={styles.post}>
  <View style={styles.postView }>
    <Image style={styles.postProfile} source={require('@/assets/images/girl2.jpeg')}/>
    <Text style={styles.postText}>Natures_clicks</Text>
  <TouchableOpacity style={styles.followBtn} onPress={()=>{
    console.log('Follow Button clicked')
  }}>
    <Text>Follow</Text>
  </TouchableOpacity>
  <Feather name="more-vertical" size={24} color="black" />
  </View>
  <View>
    <Image style={styles.postImage} source={require('@/assets/images/post1.jpeg')}/>
    <View style={styles.icons}> 
      <View style={styles.threeIcons}>
      <Feather name="heart" size={26} color="black" />
      <Ionicons name="chatbubble-outline" size={26} color="black" />
      <Feather name="send" size={26} color="black" />
      </View>
      <Feather name="bookmark" size={26} color="black" />
    </View>
 <View style={{padding:5}}> 
<Text>"The earth does not belong to us; we belong to the earth."</Text>
 <Text>Heaven is under our feet as well as over our heads.</Text></View>
  </View>
</View>
<View style={styles.post}>
  <View style={styles.postView }>
    <Image style={styles.postProfile} source={require('@/assets/images/profile2.jpeg')}/>
    <Text style={styles.postText}>The_wild_xxx</Text>
  <TouchableOpacity style={styles.followBtn} onPress={()=>{
    console.log('Follow Button clicked')
  }}>
    <Text>Follow</Text>
  </TouchableOpacity>
  <Feather name="more-vertical" size={24} color="black" />
  </View>
  <View>
    <Image style={styles.postImage} source={require('@/assets/images/post2.jpeg')}/>
    <View style={styles.icons}> 
      <View style={styles.threeIcons}>
      <Feather name="heart" size={26} color="black" />
      <Ionicons name="chatbubble-outline" size={26} color="black" />
      <Feather name="send" size={26} color="black" />
      </View>
      <Feather name="bookmark" size={26} color="black" />
    </View>
<View>
  <Text>"Blame it or praise it, there is no denying the wild horse in us." 
    "A horse loves freedom, and the weariest old work horse will roll on the ground and break into a lumbering gallop when he is turned loose into the open."</Text>
</View>

  </View>
</View>
</View>


    </View>
    </ScrollView>
  );
}


// styling 
const styles = StyleSheet.create({
  imagecontainer: {
    padding: 10,
    flexDirection: "row",
    gap: 15,
  },
  tophead: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textHead: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 20,
  },
  topIcon: {
    width: 90,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  story: {
    alignItems: "center",
  },
  suggBox:{
    padding:10,
  },
  suggParagraph:{
    width:'80%',
    flexDirection:'row',
    gap:20,
    margin:10,
    flexShrink:2,
    alignItems:'center'
  },
  Suggest:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10
  },
  post:{
    marginBottom:10
  },
  postView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    padding:10,
    borderTopWidth:1,
    borderTopColor:'grey'
  },
  postText:{
    width:'50%',
    fontSize:18,
    fontWeight:'bold'
  },
  postProfile:{
    width:60,
    height:60,
    borderRadius:30
  },
  followBtn:{
    width:70,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    height:35,
  borderColor:'#000'  
  },
  postImage:{
    width:'100%',
    height:300
  },
  icons:{

    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    height:50,
    alignItems:'center'
  },
  threeIcons:{
    width:120,
    flexDirection:'row',
    justifyContent:'space-between',
  }

});
