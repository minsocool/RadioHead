import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  Keyboard,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
// import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {images, icons, colors, fontSizes} from '../constants';
import {isValidEmail, isValidPassword} from '../utilities/validation';
import SearchingSongItem from './SearchingSongItem';
import SearchingArtistItem from './SearchingArtistItem';
/*
- ListView from a map of objects 
- FlatList
*/
function SearchingListScreen(props) {
  // list of songs = state
  const [shouldShowSongs, setShouldShowSongs] = useState(false);
  const [shouldShowArtists, setShouldShowArtists] = useState(false);
  const [val, setVal] = useState(false);
  const [searchText, setSearchText] = useState('');
  // filter Song
  const filteredSongs = () =>
    songs.filter(eachSong =>
      eachSong.song.toLowerCase().includes(searchText.toLowerCase()),
    );
  // filter Artists
  const filteredArtists = () =>
    artists.filter(eachArtist =>
      eachArtist.artist.toLowerCase().includes(searchText.toLowerCase()),
    );
  const [songs, setSongs] = useState([
    {
      artists: 'Lil Nas X, Jack Harlow',
      url: 'http://cdn.albumoftheyear.org/album/423821-industry-baby-20.jpg',
      song: 'Industry Baby',
      categories: 'POP',
    },
    {
      artists: 'DJ Snake ft. Justin Bieber ',
      url: 'http://www.menudospeques.net/images/musica/let-me-love-.jpg',
      song: ' Let Me Love You',
      categories: 'EDM',
    },
    {
      artists: 'Imagine Dragons',
      url: 'http://i1.sndcdn.com/artworks-000438539049-g9m69f-t500x500.jpg',
      song: 'Whatever it takes',
      categories: 'ROCK',
    },
    {
      artists: 'The Weeknd',
      url: 'http://upload.wikimedia.org/wikipedia/vi/4/4a/The_Weeknd_-_Starboy_%28Single%29.jpg',
      song: 'Starboy',
      categories: 'HIP-HOP',
    },
    {
      artists: 'Post Malone',
      url: 'http://i1.sndcdn.com/artworks-9eDXZyDaKdxirdWF-xz4esw-t500x500.jpg',
      song: 'Circles',
      categories: 'POP',
    },
    {
      artists: 'Duncan Laurence',
      url: 'http://i1.sndcdn.com/artworks-G6P3sBeTtHtiaak2-rQCOTA-t500x500.jpg',
      song: 'Arcade',
      categories: 'POP',
    },
    {
      artists: 'Drake',
      url: 'https://i1.sndcdn.com/artworks-000564488507-04vehn-t500x500.jpg',
      song: 'God Plans',
      categories: 'Rap',
    },
  ]);
  const [artists, setArtist] = useState([
    {
      artist: 'Binz',
      url: 'https://i.scdn.co/image/ab67616d0000b2734211ecad7ffa4c642480979e',
    },
    {
      artist: 'Travis Scoot',
      url: 'https://i1.sndcdn.com/artworks-7nykzzVzHqO09KHt-wqKtdw-t500x500.jpg',
    },
    {
      artist: 'Eminem',
      url: 'https://www.musikblog.de/wp-content/uploads/2013/11/Eminem_Credit_Universal_Music.jpg',
    },
    {
      artist: '2PAC',
      url: 'https://i.pinimg.com/originals/83/a3/9f/83a39f05594dd0425296ce09f8e52c97.jpg',
    },
    {
      artist: 'Billie Eilish ',
      url: 'https://product.hstatic.net/1000304920/product/billie-eilish-happier-than-ever-dia-cd_686b2f3fad3343efbe6bf2d0cd568c80_master.jpeg',
    },
    {
      artist: 'Khalid ',
      url: 'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/f8/45/5a/f8455a71-8307-aa9a-9c95-3d22efe0804f/886446326146.jpg/600x600bf-60.jpg',
    },
    {
      artist: 'SonTungMTP ',
      url: 'https://m.media-amazon.com/images/M/MV5BNmYyZjI4MmUtMzBiZC00NDkzLTkyYjUtNzkyNTZiMTYzMjIxXkEyXkFqcGdeQXVyMTQ0MjQzNDkz._V1_UY1200_CR109,0,630,1200_AL_.jpg',
    },
  ]);
  return (
    <SafeAreaView // full screen
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <View // HEADER SCREEN 10%
        style={{
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

      <View // Searching View (Text input)--- 10%
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
            placeholder="What do you want to listen to?"
            placeholderTextColor={'#F9F8FF'}
            style={{
              flex: 1,
              fontFamily: 'SFProText-Bold',
              fontSize: 16,
              width: 200,
              height: 40,
              color: 'white',
              backgroundColor: '#293942',
              borderRadius: 50,
              marginTop: 10,
              marginHorizontal: 10,
              marginLeft: 15,
              paddingLeft: 15,
              opacity: 0.8,
            }}
            value={val}
            onChangeText={setVal => {
              setSearchText(setVal);
            }}></TextInput>
          <FontAwesome
            name={'camera'}
            color={'white'}
            size={25}
            style={{
              right: 5,
              top: 5,
            }}
          />
        </View>
      </View>
      <View style={{backgroundColor: '#201E20'}}>
        <Text
          style={{
            fontSize: 18,
            color: '#F9F8FF',
            fontFamily: 'SFProText-Bold',
            justifyContent: 'center',
            marginLeft: 32,
            marginTop: 5,
            paddingBottom: 10,
          }}>
          Recent searches
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity // Filter Songs
            style={{
              width: 60,
              height: 35,
              backgroundColor: 'white',
              marginLeft: 32,
              marginBottom: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => setShouldShowSongs(!shouldShowSongs)}>
            <Text
              style={{
                fontFamily: 'SFProText-Bold',
                color: 'black',
                fontSize: 13,
              }}>
              Songs
            </Text>
          </TouchableOpacity>

          <TouchableOpacity // Filter Artists
            style={{
              width: 60,
              height: 35,
              backgroundColor: 'white',
              marginLeft: 18,
              marginBottom: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => setShouldShowArtists(!shouldShowArtists)}>
            <Text
              style={{
                fontFamily: 'SFProText-Bold',
                color: 'black',
                fontSize: 13,
              }}>
              Artists
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 15,
          backgroundColor: 'cyan',
          marginHorizontal: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      {
        // show FlatList
        shouldShowSongs ? (
          <FlatList
            data={filteredSongs()}
            renderItem={({item}) => (
              <SearchingSongItem
                onPress={() => {
                  alert(`You press item's name : ${item.song}`);
                }}
                sound={item}
                key={item.artists}
              />
            )}
            keyExtractor={eachSong => eachSong.artists}
          />
        ) : null
      }

      {shouldShowArtists ? (
        <FlatList
          data={filteredArtists()}
          renderItem={({item}) => (
            <SearchingArtistItem
              onPress={() => {
                alert(`You press item's name : ${item.artist}`);
              }}
              person={item}
              key={item.artist}
            />
          )}
          keyExtractor={eachArtist => eachArtist.artist}
        />
      ) : null}
    </SafeAreaView>

    /* 
      <ScrollView>
        {songs.map(eachSong => (
          <SongItem 
          sound={eachSong} key = {eachSong.artists}/>
        ))}
      </ScrollView> */
  );
}
export default SearchingListScreen;
