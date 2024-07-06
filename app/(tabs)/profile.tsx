// tabs/profile.tsx
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Entypo, FontAwesome,AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={{marginTop:25, backgroundColor:'white'}}>
      <View style={styles.top}>
      <View style={styles.TopHead}>
      <Entypo name="lock" size={24} color="black" />
        <Text>Varshini_poojary_04</Text>
        <Entypo name="chevron-small-down" size={24} color="black" />
      </View  >
      <View style={styles.rightIcon}>
      <FontAwesome name="plus-square-o" size={24} color="black" />
      <FontAwesome6 name="bars" size={24} color="black" />
      </View>
      
      </View>
      <View style={styles.Container}>
       <View style={styles.profile}>
        <Text style={styles.note}>Note..</Text>
       <Entypo style={styles.plusIcon} name="circle-with-plus" size={24} color="black" />
        <Image
        style={styles.profileImg}
         source={require('@/assets/images/girl.jpeg')}/>    
           </View>
        <View style={styles.box}>
          <Text style={{fontWeight:'bold',fontSize:18}}>12</Text>
          <Text>posts</Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontWeight:'bold',fontSize:18}}>698</Text>
          <Text>followers</Text>
        </View>
        <View style={styles.box}>
          <Text style={{fontWeight:'bold',fontSize:18}}>512</Text>
          <Text>following</Text>
        </View>
      </View>
      
      <View style={styles.details}>
      <Text>Vacchu..<Entypo name="heart" size={24} color="red" /></Text>
      <Text>Mangalore</Text>

      </View>

      <View style={styles.btn}>
        <Text style={styles.ProfileBtn}>Edit Profile</Text>
        <Text style={styles.ProfileBtn}>Share Profile</Text>
        <AntDesign name="adduser"
        style={{borderWidth:1,borderRadius:4,padding:6}} size={24} color="black" />
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  TopHead:{
    width:'55%',
    flexDirection:'row',
    alignItems:'center',
    height:50,
    justifyContent:'space-around',
   
  },
  top:{
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center'
  },
  rightIcon:{
width:60,
flexDirection:'row',
justifyContent:'space-between',

  },
  Container:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:30
  },
  box:{
    justifyContent:'center',
    alignItems:'center',
   
  },
  profileImg:{
    width:90,
    height:90,
    borderRadius:45
  },
profile:{
  // position:'absolute',
},
plusIcon:{
  width:26,
  height:26,
  position:'absolute',
  bottom:0,
  right:0,
  zIndex:2,
  backgroundColor:'white',
  borderRadius:13
},
note:{
  backgroundColor:'whitesmoke',
  borderRadius:8,
  paddingHorizontal:10,
  paddingVertical:5,
  position:'absolute',
  top:-30,
  left:10,
  zIndex:2,
},
details:{
margin:20
},
ProfileBtn:{
borderRadius:6,
paddingVertical:8,
borderWidth:1,
paddingHorizontal:20,
},
btn:{
  margin:5,
  justifyContent:'space-around',
  flexDirection:'row'
}

})