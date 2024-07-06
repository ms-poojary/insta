import { useFonts } from 'expo-font';
import { View,Text,StyleSheet } from 'react-native'
import {  SafeAreaView } from 'react-native-safe-area-context';
import {loginScreen} from './../components/loginScreen'
import { Stack } from 'expo-router';
import { ClerkProvider, SignedIn,SignedOut } from '@clerk/clerk-expo';


export default function RootLayout() {
  // useFonts({
  //   'myfont1':require('../assets/fonts/PlayWriteIS-ExtraLight.ttf'),
  //   'myfont2':require('../assets/fonts/PlayWriteIS-Regular.ttf'),
  //   'myfont3':require('../assets/fonts/PlayWriteIS-Thin.ttf')

  // })
  return (

    <Stack>
    <Stack.Screen name="(tabs)"
    options={
      {
        headerShown:false
      }
    } />
  </Stack>

  //   <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    
  //   <SafeAreaView style={styles.container}>
  //     <SignedIn>
  //     {/* <Text>Signed In!</Text> */}
  //     <Stack>
  //     <Stack.Screen name="(tabs)" />
  //   </Stack>
  //     </SignedIn>
  //     <SignedOut>
  //       <Text>Im signedout </Text>
  //       <loginScreen/>
  //       </SignedOut>
  //   </SafeAreaView>
    
  // </ClerkProvider>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});