import React, {useState, useEffect} from 'react';
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
import Slider from '@react-native-community/slider';
import TRACKS from '../data/tracksData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TrackPlayer from 'react-native-track-player';
import playSongsData from '../data/playSongsData';

const {width, height} = Dimensions.get('window');

function PlaySongScreen(props) {
  {
    /*const [selectedTrack, setSelectedTrack] = useState(0);
  const currentTrack = TRACKS[selectedTrack];
  const [pause, setPause] = useState(false);
  function togglePlayPauseBtn() {
    setPause(!pause);
  }
  const tracks = [
    {
      id: 1,
      url: require('../assets/songs/Travis-Scott-feat-Don-Toliver-What-To-Do.mp3'),
    },
  ];
  TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
    ],
  });

  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
      console.log('Tracks added');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setUpTrackPlayer();

    return () => TrackPlayer.destroy();
  }, []);
*/
  }

  const renderSongs = ({item, index}) => {
    return (
      <View
        style={{
          flex: 30,
          width: width,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <View style={[style.imageWrapper, style.elevation]}>
          <Image // album cover
            source={{uri: item.albumArtURL}}
            style={{
              width: 375,
              height: 350,
              borderRadius: 10,
            }}
            resizeMode="contain"
          />
          <FontAwesome
            name={'chevron-down'}
            color={'white'}
            size={25}
            style={{
              alignSelf: 'flex-end',
              position: 'absolute',
              marginTop: 20,
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
      <FlatList
        renderItem={renderSongs}
        data={TRACKS}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={() => {}}
      />

      <View // album details
        style={{
          flexDirection: 'row',
          marginTop: 10,
          flex: 10,
          marginHorizontal: 25,
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'SFProText-Bold',
              fontSize: 17,
              color: 'white',
            }}>
            WHAT TO DO? (ft. Don Toliver)
          </Text>
          <Text
            style={{
              fontFamily: 'SFProText-Bold',
              fontSize: 13,
              color: '#F9F8FF',
              opacity: 0.5,
            }}>
            JACKBOYS, Travis Scott
          </Text>
        </View>
        <View style={{flex: 1}} />
        <Entypo
          name={'dots-three-vertical'}
          color={'white'}
          size={25}
          style={{
            marginTop: 10,
            left: 10,
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
              width: 340,
              height: 40,
              flexDirection: 'row',
              marginHorizontal: 10,
            }}
            value={10}
            minimumValue={0}
            maximumValue={1}
            thumbTintColor="white"
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#F4EEFF"
            onSlidingComplete={() => {}}
          />
          <View
            style={{
              width: 310,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 25,
            }}>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'SFProText-Bold',
                fontSize: 15,
              }}>
              1:32
            </Text>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'SFProText-Bold',
                fontSize: 15,
              }}>
              3:31
            </Text>
          </View>
        </View>

        <View // control Back/Play/Next Song
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <FontAwesome name={'step-backward'} color={'white'} size={30} />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign
              name={'play'}
              color={'white'}
              size={50}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 30,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name={'step-forward'} color={'white'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          // lyrics
          flex: 10,
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'SFProText-Bold',
            color: 'black',
            fontSize: 20,
          }}>
          Lyrics
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default PlaySongScreen;

const style = StyleSheet.create({
  imageWrapper: {
    width: 340,
    height: 340,
  },
  elevation: {
    elevation: 5,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 5,
    shadowRadius: 3,
  },
});
