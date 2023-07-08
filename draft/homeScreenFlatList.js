import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import newReleaseData from '../data/newReleaseData';
import recentlyPlayData from '../data/recentlyPlayData';
import {images, colors} from '../constants';

class NewRelease extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#283941',
          flex: 1,
          marginTop: 10,
          width: 160,
          height: 65,
          flexDirection: 'row',
          marginRight: 15,
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
              fontSize: 16,
              color: 'white',
            }}>
            {this.props.item.name}
          </Text>
          <Text
            style={{
              fontFamily: 'SFProText-Bold',
              fontSize: 15,
              color: 'gray',
            }}>
            {this.props.item.song}
          </Text>
        </View>
      </View>
    );
  }
}

class RecentlyPlay extends Component {
  render() {
    return (
      <View
        style={{
          // 1st Recently Play
          flex: 1, // full screen list view 1
          width: 100,
          height: 135,
          marginTop: 10,
          flexDirection: 'column',
          marginRight: 15,
        }}>
        <Image
          source={this.props.item.image}
          style={{
            width: 100,
            height: 100,
          }}></Image>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text
            style={{
              fontFamily: 'SFProText-Bold',
              fontSize: 14,
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
      </View>
    );
  }
}

function HomeScreen(props) {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView // FULL SCREEN 100%
      style={{
        flex: 100,
        backgroundColor: colors.primary,
      }}>
      <ScrollView>
        <View // HEADER SCREEN 10%
          style={{
            flex: 10,
            backgroundColor: '#283941',
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
                width: 40,
                height: 40,
                marginEnd: 15,
                borderRadius: 400 / 2,
              }}></Image>
          </View>
        </View>

        <View // TOP SCREEN 20%
          style={{
            flex: 20,
            marginHorizontal: 25,
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              justifyContent: 'center',
              color: '#F7F6FC',
              fontFamily: 'SFProText-Bold',
              fontSize: 25,
              marginTop: 15,
            }}>
            New Release
          </Text>
          <View style={{flex: 1}}>
            <FlatList
              horizontal
              data={newReleaseData}
              renderItem={({item, index}) => {
                // console.log(`Item = ${item}, index = ${index}`)
                return <NewRelease item={item} index={index}></NewRelease>;
              }}></FlatList>
          </View>
        </View>

        <View // MID TOP SCREEN 30%
          style={{
            flex: 30,
            marginLeft: 25,
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              justifyContent: 'center',
              color: '#F7F6FC',
              fontFamily: 'SFProText-Bold',
              fontSize: 25,
              marginTop: 10,
            }}>
            Recently Play
          </Text>

          <View style={{flex: 1}}>
            <FlatList
              horizontal
              data={recentlyPlayData}
              renderItem={({item, index}) => {
                // console.log(`Item = ${item}, index = ${index}`)
                return <RecentlyPlay item={item} index={index}></RecentlyPlay>;
              }}></FlatList>
          </View>
        </View>

        <View // Mid Bottom Screen 30%
          style={{
            flex: 30,
            marginLeft: 25,
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              justifyContent: 'center',
              color: '#F7F6FC',
              fontFamily: 'SFProText-Bold',
              fontSize: 25,
              marginTop: 10,
            }}>
            Categories
          </Text>

          <View // Scroll View (Categories)
          >
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={true}>
              <View
                style={{
                  // 1st Recently Play
                  flex: 1, // full screen list view 1
                  width: screenWidth,
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    // COLUMN OF POP & ROCK
                    flexDirection: 'column',
                    width: 120,
                  }}>
                  <View
                    style={{
                      // POP
                      height: 60,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#9920E0',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'SFProText-SemiBold',
                        color: '#F9F8FF',
                        fontSize: 14,
                      }}>
                      Pop
                    </Text>
                  </View>

                  <View
                    style={{
                      // Rock
                      height: 60,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#A92A47',
                      marginTop: 16,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'SFProText-SemiBold',
                        color: '#F9F8FF',
                        fontSize: 14,
                      }}>
                      Rock
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    // COLUMN OF EDM & Hiphop
                    flexDirection: 'column',
                    width: 120,
                    marginLeft: 16,
                  }}>
                  <View
                    style={{
                      // EDM
                      height: 60,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#FFBE44',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'SFProText-SemiBold',
                        color: '#F9F8FF',
                        fontSize: 14,
                      }}>
                      EDM
                    </Text>
                  </View>

                  <View
                    style={{
                      // Hip-hop
                      height: 60,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#008987',
                      marginTop: 16,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'SFProText-SemiBold',
                        color: '#F9F8FF',
                        fontSize: 14,
                      }}>
                      Hip-hop
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    // COLUMN OF Podcast & Jazz
                    flexDirection: 'column',
                    width: 120,
                    marginLeft: 16,
                  }}>
                  <View
                    style={{
                      // Podcast
                      height: 60,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#008FD6',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'SFProText-SemiBold',
                        color: '#F9F8FF',
                        fontSize: 14,
                      }}>
                      Podcast
                    </Text>
                  </View>

                  <View
                    style={{
                      // Jazz
                      height: 60,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#DD643D',
                      marginTop: 16,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'SFProText-SemiBold',
                        color: '#F9F8FF',
                        fontSize: 14,
                      }}>
                      Jazz
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View // MID TOP SCREEN 30%
          style={{
            flex: 10,
            marginLeft: 25,
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              justifyContent: 'center',
              color: '#F7F6FC',
              fontFamily: 'SFProText-Bold',
              fontSize: 25,
              marginTop: 10,
            }}>
            Playlists
          </Text>

          <ScrollView>
            <View></View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
