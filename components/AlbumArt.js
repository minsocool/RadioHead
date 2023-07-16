import React from 'react';
import {Image, View, Dimensions} from 'react-native';
const {width} = Dimensions.get('window').width;
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function AlbumArt({albumArt}) {
  return (
    <View>
      <View>
        <Image
          source={{uri: albumArt}}
          style={{
            width: width,
            height: 400,
          }}
          resizeMode="cover"
        />
        <FontAwesome
          name={'chevron-down'}
          color={'black'}
          size={30}
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            marginTop: 25,
            right: 30,
          }}
        />
      </View>
    </View>
  );
}

export default AlbumArt;
