import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { MaterialIcons ,Ionicons} from '@expo/vector-icons';
import Video from 'react-native-video'

export default function reelsScreen() {
  return (
    <View style={{marginTop:25}}>

      <View style={styles.topbar}>
        <View style={styles.reel}>
        <Text style={{fontSize:20}}>Reels</Text>
        <MaterialIcons name="expand-more" size={24} color="black" />
        </View>
        <Ionicons name="camera-outline" size={30} color="black" />
      </View> 

{/* <Video
source={require('@/assets/images/reel1.mp4')}
/> */}
       {/* <Video
        source={{ uri: 'https://videos.pexels.com/video-files/4269126/4269126-sd_640_338_25fps.mp4' }} // Replace with your video URL
        // style={StyleSheet.absoluteFill}
        resizeMode="cover"
        repeat
        muted
        // other props you might need
      /> */}
    </View>
  )
}
const styles=StyleSheet.create({
  topbar:{
    flexDirection:'row',
    padding:10,
    justifyContent:'space-between',
  },
  reel:{
    flexDirection:'row',
    height:40,
    alignItems:'center',
    
  }
})