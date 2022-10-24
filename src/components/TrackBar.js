import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {images} from '../assets/images'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';


const TrackBar = ({img, title, artist}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
        <View style={{flexDirection: 'row'}}>
            <Image source={img} style={{width: 50, height: 50, resizeMode: 'cover', borderRadius: 8}} />
            <View>
                <Text style={{color: 'white', fontSize: wp('4.2%'), marginLeft: 10, fontWeight: 'bold'}}>{title}</Text>
                <Text style={{color: 'white', fontSize: wp('3.6%'), marginLeft: 10}}>{artist}</Text>
            </View>
        </View>
        <View style={styles.iconContainer}>
            <AntDesign name="play" size={30} color="white" />
            {/* <AntDesign name="pausecircle" size={30} color="white" /> */}
        </View>
    </TouchableOpacity>
  )
}

export default TrackBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#468BF1',
        padding: 8,
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    iconContainer: {
        marginRight: 15
    }

})