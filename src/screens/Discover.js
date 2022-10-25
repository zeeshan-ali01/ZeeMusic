import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, StatusBar, TextInput} from 'react-native'
import React, {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import {images} from '../assets/images'
import TrackBar from '../components/TrackBar'
import TrackCard from '../components/TrackCard';

const Discover = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  
  
  return (

    
    <ImageBackground source={images.background} style={styles.container} blurRadius={2.2}>
      <View style={{marginTop: 40}}>
        <StatusBar backgroundColor="transparent" translucent />
      </View>
      <ScrollView >
        <View style={styles.inputContainer}>
          <TextInput placeholder="Search for any song" style={styles.input} onFocus={() => console.log("focussed")} />
        </View>
        <Text style={{fontSize: wp('6%'), color: 'white', fontWeight: 'bold', margin: 10 }}>Top Charts</Text>
        <View style={{width: '95%', alignSelf:'center', marginVertical: 8}}>
          <TrackBar img={images.placeholder} title="Under The Influence" artist="Chris Brown" />
        </View>
        <View style={{width: '95%', alignSelf:'center', marginVertical: 8}}>
          <TrackBar img={images.placeholder} title="Under The Influence" artist="Chris Brown" />
        </View>
        <View style={{width: '95%', alignSelf:'center', marginVertical: 8}}>
          <TrackBar img={images.placeholder} title="Under The Influence" artist="Chris Brown" />
        </View>
        <Text style={{fontSize: wp('6%'), color: 'white', fontWeight: 'bold', margin: 10 }}>Top Artists</Text>
        <ScrollView horizontal={true} contentContainerStyle={{ paddingVertical: 15}} showsHorizontalScrollIndicator={false} >
          <Image source={images.person01} style={styles.artist} />
          <Image source={images.person02} style={styles.artist} />
          <Image source={images.person03} style={styles.artist} />
          <Image source={images.person04} style={styles.artist} />
          <Image source={images.person05} style={styles.artist} />
          <Image source={images.person06} style={styles.artist} />
        </ScrollView>
        
        <View style={{flexDirection: 'row', justifyContent:'space-between', marginVertical: 20, paddingHorizontal: 15, zIndex: 100000}}>
          <Text style={{fontSize: wp('6%'), color: 'white', fontWeight: 'bold', marginVertical: 10 }}>Discover</Text>
          <View style={{width: wp('30%')}}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{width: '100%'}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View >
            <TrackCard img={images.placeholder} title="Under The Influence" artist="Chris Brown" />
          </View>
          <View >
            <TrackCard img={images.placeholder} title="Under The Influence" artist="Chris Brown" />
          </View>
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
    marginLeft: 15
  },
  inputContainer: {
    width:'95%',
    alignSelf: 'center'
  },
  input: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 12,
    marginVertical: 10,
    

  }
})