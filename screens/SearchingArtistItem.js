import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {images, icons, colors, fontSizes} from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';

function SearchingArtistItem(props) {
  // Item per songs
  let {artist, url} = props.person; // destructuring an object
  const {onPress} = props;
  return (
    <TouchableOpacity // view per index
      onPress={onPress}>
      <SafeAreaView
        style={{
          // index
          flex: 1,
          backgroundColor: 'black',
          flexDirection: 'row',
          marginHorizontal: 20,
        }}>
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: 'cover',
            borderRadius: 400 / 2,
            marginRight: 15,
            marginLeft: 10,
            marginTop: 5,
          }}
          source={{
            uri: url,
          }}
        />

        <View // view artist , song
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View // songs
            style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: 'SFProText-Bold',
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              {artist}
            </Text>
            <Text
              style={{
                fontFamily: 'SFProText-Bold',
                color: '#737173',
                fontSize: 13,
                marginTop: 5,
              }}>
              Artist
            </Text>
          </View>
        </View>

        <View
          style={{
            // dai~ phan cach cac components
            flex: 1,
          }}></View>

        <Entypo
          name={'dots-three-vertical'}
          color={'white'}
          size={20}
          style={{
            alignSelf: 'center',
            marginEnd: 5,
            justifyContent: 'center',
          }}
        />
      </SafeAreaView>
    </TouchableOpacity>
  );
}

export default SearchingArtistItem;
{
  /* <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems:'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontFamily: 'SFProText-Bold',
                color: 'white',
                fontSize: 16,
              }}>
              Categories:
            </Text>
            <Text
              style={{
                fontFamily: 'SFProText-Bold',
                color: _getColorFromCategories(categories),
                fontSize: 16,
              }}>
              {categories.toUpperCase()}
            </Text>
          </View> */
}
