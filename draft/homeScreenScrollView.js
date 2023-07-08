import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {images, icons, colors, fontSizes} from '../constants';
import MainContainer from '../components/MainContainer';
function HomeScreen(props) {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;
  let windowHeight = Dimensions.get('screen').height;
  return (
    <SafeAreaView // FULL SCREEN 100%
      style={{
        flex: 100,
        backgroundColor: colors.primary,
      }}>
      <ScrollView style={{flex: 1, height: '100%', width: '100%'}}>
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

          <View
            style={{
              width: screenWidth,
            }} // ScrollView (New Release)
          >
            <ScrollView horizontal={true}>
              <View // the weeknd
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
                  source={images.theWeeknd}
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
                    The Weeknd
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'SFProText-Bold',
                      fontSize: 15,
                      color: 'gray',
                    }}>
                    Starboy
                  </Text>
                </View>
              </View>

              <View // post malone
                style={{
                  flex: 1, // full screen list view 2
                  marginTop: 10,
                  backgroundColor: '#283941',
                  width: 160,
                  height: 65,
                  flexDirection: 'row',
                  marginRight: 15,
                }}>
                <Image
                  source={images.postMalone}
                  style={{
                    width: 50,
                    height: 50,
                    margin: 5,
                  }}></Image>
                <View
                  style={{
                    flex: 1,
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
                    Post Malone
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'SFProText-Bold',
                      fontSize: 15,
                      color: 'gray',
                    }}>
                    Circles
                  </Text>
                </View>
              </View>

              <View // travis scott
                style={{
                  flex: 1, // full screen list view 3
                  marginTop: 10,
                  backgroundColor: '#283941',
                  width: 160,
                  height: 65,
                  flexDirection: 'row',
                  marginRight: 15,
                }}>
                <Image
                  source={images.travisScott}
                  style={{
                    width: 50,
                    height: 50,
                    margin: 5,
                  }}></Image>
                <View
                  style={{
                    flex: 1,
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
                    Travis Scott
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'SFProText-Bold',
                      fontSize: 15,
                      color: 'gray',
                    }}>
                    Highest In The Room
                  </Text>
                </View>
              </View>
            </ScrollView>
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

          <View
            style={{
              width: screenWidth,
            }}
            // Scroll View (Recently Play)
          >
            <ScrollView horizontal={true}>
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
                  source={images.drake}
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
                    Drake
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'SFProText-Bold',
                      fontSize: 13,
                      color: 'gray',
                    }}>
                    Gods Plan
                  </Text>
                </View>
              </View>

              <View
                style={{
                  // 2st Recently Play
                  flex: 1, // full screen list view 2
                  width: 100,
                  height: 135,
                  marginTop: 10,
                  flexDirection: 'column',
                  marginRight: 15,
                }}>
                <Image
                  source={images.lilNasX}
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
                    Lil Nas,Jack..
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'SFProText-Bold',
                      fontSize: 13,
                      color: 'gray',
                    }}>
                    Industry baby
                  </Text>
                </View>
              </View>

              <View
                style={{
                  // 3st Recently Play
                  flex: 1, // full screen list view 3
                  width: 100,
                  height: 135,
                  marginTop: 10,
                  flexDirection: 'column',
                  marginRight: 15,
                }}>
                <Image
                  source={images.imagineDragons}
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
                    Imagine Dragons
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'SFProText-Bold',
                      fontSize: 13,
                      color: 'gray',
                    }}>
                    Whatever it takes
                  </Text>
                </View>
              </View>

              <View
                style={{
                  // 4st Recently Play
                  flex: 1, // full screen list view 4
                  width: 100,
                  height: 135,
                  marginTop: 10,
                  flexDirection: 'column',
                  marginRight: 15,
                }}>
                <Image
                  source={images.duncanLaurence}
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
                      fontSize: 16,
                      color: 'white',
                    }}>
                    Ducan Lauren..
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'SFProText-Bold',
                      fontSize: 15,
                      color: 'gray',
                    }}>
                    Arcade
                  </Text>
                </View>
              </View>
            </ScrollView>
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
                  height: screenHeight,
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    // COLUMN OF POP & ROCK
                    flexDirection: 'column',
                    width: 120,
                    height: screenHeight,
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
                    height: screenHeight,
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
                    height: screenHeight,
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

        <View
          style={{
            flex: 10,
            backgroundColor: 'cyan',
            justifyContent: 'flex-end',
          }}>
          <Text>Minh</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
