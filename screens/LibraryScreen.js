import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {images, colors} from '../constants';
import playListsData from '../data/playListsData';
import libraryData from '../data/libraryData';
import PlayListsItem from './PlayListsItem';
const Stack = createStackNavigator();
import {createStackNavigator} from '@react-navigation/stack';
function LibraryScreen(props) {
  {
    /*const [selectedId, setSelectedId] = useState(1); // null (id)

  const Item = ({item, onPress, textColor, fontSize}) => (
    <View
      style={{
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            {
              fontSize: 17,
              letterSpacing: 1,
            },
            textColor,
            fontSize,
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => {
    const color = item.id === selectedId ? 'white' : 'gray';
    const fontSize = item.id === selectedId ? 23 : 17;
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)} // luu trang thai khi nhan nut
        textColor={{color}}
        fontSize={{fontSize}}
      />
    );
  };*/
  }
  const AlbumSongDetails = () => props.navigation.navigate('AlbumSongDetails');
  const [album, setAlbum] = useState('All');
  const [datalist, setDataList] = useState(playListsData);
  const setAlbumFilter = album => {
    if (album !== 'All') {
      setDataList([
        ...playListsData.filter(eachAlbum => eachAlbum.album === album),
      ]);
    } else {
      setDataList(playListsData);
    }
    setAlbum(album);
  };

  return (
    <SafeAreaView // FULL SCREEN 100%
      style={{
        flex: 100,
        backgroundColor: 'black',
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

      <View // Top Screen 10%
        style={{
          flex: 10,
          backgroundColor: '#201E20',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <ScrollView horizontal={true}>
          {libraryData.map(eachAlbum => (
            <TouchableOpacity
              style={[
                {
                  width: Dimensions.get('window').width / 3.5,
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'center',
                },
                album === eachAlbum.album,
              ]}
              onPress={() => setAlbumFilter(eachAlbum.album)}>
              <Text
                style={[
                  {
                    fontSize: 18,
                    color: 'white',
                    opacity: 0.5,
                    fontFamily: 'SFProText-Bold',
                    alignSelf: 'center',
                  },
                  album === eachAlbum.album && styles.txtActive,
                ]}>
                {eachAlbum.album}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* <FlatList
          data={libraryData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        /> */}
      </View>

      <View // MID & BOTTOM SCREEN 80%
        style={{
          flex: 80,
        }}>
        <FlatList
          data={datalist}
          renderItem={({item}) => (
            <PlayListsItem playLists={item} onPress={AlbumSongDetails} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default LibraryScreen;

const styles = StyleSheet.create({
  txtActive: {
    color: 'white',
    opacity: 1,
    fontSize: 23,
    alignSelf: 'center',
  },
});
