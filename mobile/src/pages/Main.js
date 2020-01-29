import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null)

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,

        })
        const { latitude, longitude } = coords
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07
        })
      }
    }

    loadInitialPosition()
  }, [])

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -19.9132301, longitude: -43.9565751 }}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/43018177?s=460&v=4' }} />
          <Callout onPress={() => {
            navigation.navigate('Profile', { github_username: 'nathangabriel27' })
          }} >
            <View style={styles.callout} >
              <Text style={styles.devName} >Nathan Gabriel</Text>
              <Text style={styles.devBio} >Sem bio</Text>
              <Text style={styles.devtechs} >React, React Native, Node</Text>

            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.searchForm} >
        <TextInput
          style={styles.searchInput}
          placeholder='Buscar devs por techs...'
          placeholderTextColor='#999'
          autoCapitalize='works'
          autoCorrect={false}
        />

        <TouchableOpacity onPress={() => { }} style={styles.loadButton} >
          <MaterialIcons name='my-location' size={20} color='#fff' position='absolute'/>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#140432'
  },
  callout: {
    width: 260
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 26
  },
  devBio: {
    color: '#666',
    marginTop: 5
  },
  devtechs: {
    marginTop: 5
  },
  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row' 
    /*
    */

  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4 
 
  },

  loadButton: {
    width:50,
    height: 50,
    backgroundColor: '#140432',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:15

  },


})

export default Main;