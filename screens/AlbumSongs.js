import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {images} from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import playSongsData from '../data/playSongsData';
import PlaySongsItem from './PlaySongsItem';

function AlbumSongs(props) {
  const PlaySongScreen = () => props.navigation.navigate('PlaySongScreen');
  const [shouldShowSongs, setShouldShowSongs] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [val, setVal] = useState(false);
  // filter Song
  const filteredSongs = () =>
    playSongsData.filter(eachSong =>
      eachSong.playSongsName.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <SafeAreaView
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View // HEADER SCREEN 10%
        style={{
          flex: 10,
          backgroundColor: 'black',
          height: 50,
          justifyContent: 'flex-start',
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              marginLeft: 25,
              marginTop: 18,
              color: '#F7F6FC',
              fontFamily: 'EurostileNextLTPro-Bold',
              fontSize: 20,
            }}>
            RADIOHEAD
          </Text>
          <View style={{flex: 1}} />
          <Image
            source={images.personal}
            style={{
              width: 45,
              height: 45,
              marginEnd: 15,
              borderRadius: 400 / 2,
            }}></Image>
        </View>
      </View>
      <View
        style={{
          // TOP SCREEN 30%
          flex: 30,
          backgroundColor: 'white',
          marginHorizontal: 25,
        }}>
        <Text
          style={{
            fontFamily: 'SFProText-Bold',
            color: 'black',
            fontSize: 23,
            marginTop: 10,
          }}>
          @playListNames
        </Text>
        <View
          style={{
            height: 60,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              autoCorrect={false}
              placeholder="Search"
              placeholderTextColor={'#F9F8FF'}
              style={{
                fontFamily: 'SFProText-Bold',
                fontSize: 16,
                width: 320,
                height: 40,
                color: 'white',
                backgroundColor: '#293942',
                borderRadius: 50,
                marginTop: 20,
                marginLeft: 30,
                paddingLeft: 15,
                opacity: 0.8,
              }}
              value={val}
              onChangeText={setVal => {
                setSearchText(setVal);
              }}></TextInput>
            <FontAwesome
              name={'search'}
              color={'black'}
              size={25}
              style={{
                right: 35,
                top: 10,
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => alert('You press Shuffle Play @randomSongs')}
            style={{
              width: 180,
              height: 40,
              backgroundColor: '#7971E9',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'SFProText-Bold',
                fontSize: 16,
              }}>
              Shuffle Play
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert('You press Add Songs ')}
            style={{
              width: 120,
              height: 40,
              backgroundColor: '#293942',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              borderRadius: 10,
              marginLeft: 15,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'SFProText-Bold',
                fontSize: 16,
              }}>
              Add Songs
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          // MID BOTTOM 60^
          flex: 60,
          backgroundColor: 'black',
        }}>
        <FlatList
          data={filteredSongs()}
          renderItem={({item}) => (
            <PlaySongsItem
              playSongs={item}
              onPress={PlaySongScreen}
              key={item.id}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default AlbumSongs;
