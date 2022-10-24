import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {images} from '../assets/images'
import TrackBar from '../components/TrackBar'
import TrackCard from '../components/TrackCard';

const AroundYou = () => {
  return (

    
    <ImageBackground source={images.background} style={styles.container} blurRadius={2.2}>
        <View style={{marginTop: 40}}>
            <StatusBar backgroundColor="transparent" translucent />
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: wp('6%'), color: 'white', fontWeight: 'bold', margin: 10 }}>Top Songs around you</Text>
            <View style={{width: '95%', alignSelf:'center', marginVertical: 8}}>
                <TrackBar img={images.placeholder} title="Under The Influence" artist="Chris Brown" />
            </View>
            <View style={{width: '95%', alignSelf:'center', marginVertical: 8}}>
                <TrackBar img={images.placeholder} title="Under The Influence" artist="Chris Brown" />
            </View>
            <View style={{width: '95%', alignSelf:'center', marginVertical: 8}}>
                <TrackBar img={images.placeholder} title="Under The Influence" artist="Chris Brown" />
            </View>
        </ScrollView>
    </ImageBackground>
  )
}

export default AroundYou

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  artist: {
    width: 100, 
    height: 100, 
    resizeMode: 'cover', 
    borderRadius: 50,
    // marginHorizontal: 5,
    marginLeft: 15

  }
})