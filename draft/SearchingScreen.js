import React, {Component, useState, useEffect} from 'react';
import {Text, View, Image, SafeAreaView, Button, FlatList} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {images, colors} from '../constants';
import searchingData from '../data/searchingData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Searching extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={this.props.item.image}
          style={{
            width: 50,
            height: 50,
            margin: 5,
          }}></Image>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'SFProText-Bold',
              fontSize: 13,
              color: 'white',
            }}>
            {this.props.item.name}
          </Text>
          <Text
            style={{
              fontFamily: 'SFProText-Bold',
              fontSize: 13,
              color: 'gray',
            }}>
            {this.props.item.song}
          </Text>
        </View>
        <View style={{flex: 1}}></View>
        <FontAwesome
          name={'close'}
          color={'gray'}
          size={18}
          style={{
            marginEnd: 10,
          }}
        />
      </View>
    );
  }
}

function SearchingScreen(props) {
  const [val, setVal] = useState(false);
  const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 100,
        backgroundColor: colors.primary,
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

      <View // Searching View (Text input)--- 10%
        style={{
          flex: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name={'search'}
            color={'white'}
            size={25}
            style={{
              left: 15,
              top: 10,
            }}
          />
          <TextInput
            autoCorrect={false}
            placeholder="Search"
            placeholderTextColor={'#F9F8FF'}
            style={{
              flex: 1,
              fontFamily: 'SFProText-Bold',
              fontSize: 16,
              width: 350,
              height: 40,
              color: 'white',
              marginTop: 25,
              backgroundColor: '#293942',
              marginLeft: 25,
              borderRadius: 50,
              paddingLeft: 20,
              opacity: 0.8,
            }}
            value={val}
            onChangeText={setVal => {
              setSearchText(setVal);
            }}></TextInput>
          <Text
            onPress={() => setVal('')}
            style={{
              marginTop: 25,
              marginEnd: 5,
              alignSelf: 'center',
              justifyContent: 'center',
              color: '#7971E9',
              fontFamily: 'SFProText-Bold',
              fontSize: 15,
            }}>
            Cancel
          </Text>
        </View>
      </View>

      <View // View recent Searching 80%
        style={{
          flex: 80,
          marginTop: 25,
          backgroundColor: '#293942',
          width: 300,
          marginHorizontal: 25,
          borderRadius: 10,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginLeft: 20,
            marginTop: 5,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#F9F8FF',
              fontFamily: 'SFProText-Bold',
              alignSelf: 'flex-start',
              justifyContent: 'center',
            }}>
            Recent search
          </Text>
          <FlatList
            data={searchingData}
            renderItem={({item, index}) => {
              console.log(`Item = ${item}, index = ${index}`);
              return <Searching item={item} index={index}></Searching>;
            }}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SearchingScreen;
