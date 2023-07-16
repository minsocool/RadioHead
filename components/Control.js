import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconFill, IconOutline} from '@ant-design/icons';
const {width, height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Control({togglePlayPauseBtn, pause, playNextSong, playPrevSong}) {
  return (
    <View // control Back/Play/Next Song
      style={{
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={playPrevSong}>
        <FontAwesome // PrevBtn
          name={'step-backward'}
          color={'white'}
          size={30}
          style={{
            alignSelf: 'flex-start',
          }}
        />
      </TouchableOpacity>

      {/* play/pause btn */}
      {pause ? (
        <TouchableOpacity>
          <FontAwesome // play button
            name={'play'}
            color={'white'}
            size={35}
            style={{
              marginHorizontal: 50,
              alignItems: 'center',
            }}
            onPress={togglePlayPauseBtn}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <FontAwesome // play button
            name={'pause'}
            color={'white'}
            size={35}
            style={{
              marginHorizontal: 50,
              alignItems: 'center',
            }}
            onPress={togglePlayPauseBtn}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={playNextSong}>
        <FontAwesome //NextBtn
          name={'step-forward'}
          color={'white'}
          size={30}
          style={{alignSelf: 'flex-end'}}
        />
      </TouchableOpacity>
    </View>
  );
}
export default Control;
