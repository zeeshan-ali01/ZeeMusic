import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {images} from '../assets/images'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';


const TrackCard = ({img, title, artist}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
        <View >
            <Image source={img} style={{width: wp('42.5%'), height: hp('20%'), resizeMode: 'cover', borderRadius: 8}} />
            <View>
                <Text style={{color: 'white', fontSize: wp('4.2%'), marginLeft: 10, fontWeight: 'bold', marginTop: 6}}>{title}</Text>
                <Text style={{color: 'white', fontSize: wp('3.6%'), marginLeft: 10}}>{artist}</Text>
            </View>
        </View>
        
    </TouchableOpacity>
  )
}

export default TrackCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#468BF1',
        padding: 8,
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'space-between'
    }

})