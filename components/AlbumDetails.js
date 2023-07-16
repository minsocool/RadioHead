import React from 'react';
import {Text, View} from 'react-native';

function AlbumDetails({trackName, artistName}) {
  return (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'SFProText-Bold',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 17,
        }}>
        {trackName}
      </Text>
      <Text
        style={{
          fontFamily: 'SFProText-Bold',
          fontWeight: 'bold',
          fontSize: 15,
          color: '#F9F8FF',
          opacity: 0.5,
        }}>
        {artistName}
      </Text>
    </View>
  );
}

export default AlbumDetails;
