import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {images, icons, colors, fontSizes} from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';

function PlayListsItem(props) {
  let {image, playListNames, album, adjustIcon} = props.playLists; // destructuring an object
  const {onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <SafeAreaView
        style={{
          // per index
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 25,
          marginTop: 15,
        }}>
        <Image // ALBUM IMAGE
          style={{
            width: 60,
            height: 60,
            resizeMode: 'cover',
            borderRadius: 400 / 2,
            marginTop: 5,
          }}
          source={{
            uri: image,
          }}
        />
        <View // view albumName,amountSongs
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
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
              {playListNames}
            </Text>
            <Text
              style={{
                fontFamily: 'SFProText-Bold',
                color: '#737173',
                fontSize: 13,
                marginTop: 5,
              }}>
              {album}
            </Text>
          </View>
        </View>

        <View // dai~ phan cach cac components
          style={{
            flex: 1,
          }}></View>

        <View // adjustIcon
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
              color: 'white',
              tintColor: 'white',
            }}
            source={{
              uri: adjustIcon,
            }}
          />
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
}

export default PlayListsItem;
