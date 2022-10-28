import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {images} from '../assets/images'
import TrackBar from '../components/TrackBar'
import TrackCard from '../components/TrackCard';

import { useDispatch, useSelector } from 'react-redux';
// import { setTopCharts } from '../redux/topChartsSlice';
// import { getPhotos } from '../redux/topChartsSlice';
import { getTopCharts } from '../redux/topChartsSlice';

const Discover = () => {
  const dispatch = useDispatch();
  const {topCharts} = useSelector(state => state.topCharts)
  
  console.log(topCharts)
  
  return (
    
    <ImageBackground source={images.background} style={styles.container} blurRadius={2.2}>
        <View style={{marginTop: 40}}>
          <StatusBar backgroundColor="transparent" translucent />
        </View>
        <ScrollView>
          
          <Text style={{fontSize: wp('6%'), color: 'white', fontWeight: 'bold', margin: 10 }}>Top Artists</Text>
          <ScrollView horizontal={true} contentContainerStyle={{ paddingVertical: 15}} showsHorizontalScrollIndicator={false} >
            <Image source={images.person01} style={styles.artist} />
            <Image source={images.person02} style={styles.artist} />
            <Image source={images.person03} style={styles.artist} />
            <Image source={images.person04} style={styles.artist} />
            <Image source={images.person05} style={styles.artist} />
            <Image source={images.person06} style={styles.artist} />
          </ScrollView>

          <TouchableOpacity onPress={() => {
            dispatch(getTopCharts())
          }}>
            <Text style={{fontSize: wp('10%')}}>Click Me</Text>
          </TouchableOpacity>
          
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: wp('6%'), color: 'white', fontWeight: 'bold', margin: 10 }}>Top Charts</Text>
          </View>
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

export default Discover

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