import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {images} from '../assets/images'
import TrackBar from '../components/TrackBar'
import TrackCard from '../components/TrackCard';
import ArtistCard from '../components/ArtistCard';

const TopArtists = () => {
  return (

    
    <ImageBackground source={images.background} style={styles.container} blurRadius={2.2}>
      <View style={{marginTop: 40}}>
          <StatusBar backgroundColor="transparent" translucent />
      </View>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: wp('6%'), color: 'white', fontWeight: 'bold', margin: 10 }}>Top Artists</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View >
            <ArtistCard img={images.placeholder} artistName="OneRepublic" />
          </View>
          <View >
            <ArtistCard img={images.placeholder} artistName="OneRepublic" />
          </View>
        </View>
        
      </ScrollView>
    </ImageBackground>
  )
}

export default TopArtists

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