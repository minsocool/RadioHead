import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import TRACKS from '../data/tracksData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {images, icons, colors, fontSizes} from '../constants';
import AlbumArt from '../components/AlbumArt';
import AlbumDetails from '../components/AlbumDetails';
import Control from '../components/Control';
const {width, height} = Dimensions.get('window');

function PlaySongScreen(props) {
  const [selectedTrack, setSelectedTrack] = useState(0);

  const [pause, setPause] = useState(false);

  const currentTrack = TRACKS[selectedTrack];

  // console.log({currentTrack});

  function togglePlayPauseBtn() {
    setPause(!pause);
  }

  // play the next song

  function playNextSong() {
    // if the select track is the last song and next btn is pressed then set the first song
    // TRACKS.length - 1 = last song
    if (selectedTrack === TRACKS.length - 1) {
      // the last song then reset
      setSelectedTrack(0);
    } else {
      // else next song
      setSelectedTrack(selectedTrack + 1);
    }
  }
  function playPrevSong() {
    // if the select track is the first song and prev btn is pressed then set the last song
    if (selectedTrack === 0) {
      setSelectedTrack(TRACKS.length - 1); // play the last song data
    } else {
      setSelectedTrack(selectedTrack - 1);
    }
  }

  const renderSongs = ({item, index}) => {
    return (
      <View
        style={{
          flex: 30,
          width: width,
        }}>
        <View>
          <Image
            source={{uri: item.albumArtURL}}
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
  };
  return (
    <SafeAreaView
      style={{
        flex: 100,
        backgroundColor: 'black',
      }}>
      <AlbumArt albumArt={currentTrack.albumArtURL} />
      <View // album details
        style={{
          flexDirection: 'row',
          marginTop: 10,
          flex: 10,
          marginHorizontal: 25,
        }}>
        <AlbumDetails
          trackName={currentTrack.title}
          artistName={currentTrack.artist}
        />
        <View style={{flex: 1}} />
        <Entypo
          name={'dots-three-vertical'}
          color={'white'}
          size={25}
          style={{
            marginTop: 10,
            left: 15,
          }}
        />
      </View>

      {/* control */}

      <View
        style={{
          flex: 40,
        }}>
        <View // control songs (Sliders)
        >
          <Slider
            style={{
              width: width - 15,
              height: 20,
              flexDirection: 'row',
              marginHorizontal: 10,
            }}
            value={0.5}
            minimumValue={0}
            maximumValue={1}
            thumbTintColor="white"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#F4EEFF"
            onSlidingComplete={() => {}} // xu ly het nhac => next music
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 25,
            }}>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'SFProText-Bold',
                fontSize: 15,
                alignSelf: 'flex-start',
              }}>
              1:32
            </Text>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'SFProText-Bold',
                fontSize: 15,
                alignSelf: 'flex-end',
              }}>
              3:33
            </Text>
          </View>
        </View>
        <Control
          {...{togglePlayPauseBtn}}
          {...{pause}}
          {...{playNextSong}}
          {...{playPrevSong}}
        />
        {/* Play a song */}
        <Video
          source={currentTrack.audioUrl}
          audioOnly
          paused={pause}
          controls={true}
          currentTime={5.2}
        />
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 40,
          }}>
          <FontAwesome name="volume-off" size={16} color="gray" />
          <Slider // Sound effect
            style={{
              width: 250,
              marginHorizontal: 10,
            }}
            value={0.8}
            minimumValue={0}
            maximumValue={1}
            thumbTintColor="white"
            minimumTrackTintColor="#5F9EA0"
            maximumTrackTintColor="#F4EEFF"
          />
          <FontAwesome name="volume-up" size={16} color="gray" />
        </View>
      </View>

      <TouchableOpacity
        style={{
          // lyrics
          flex: 12,
          backgroundColor: '#0D1117',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        onPress={() => {
          alert('pressed lyrics');
        }}>
        <Text
          style={{
            fontFamily: 'SFProText-Bold',
            color: 'white',
            fontSize: 20,
          }}>
          Lyrics
        </Text>
        <FontAwesome
          name={'chevron-down'}
          color={'white'}
          size={15}
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            right: 30,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default PlaySongScreen;
