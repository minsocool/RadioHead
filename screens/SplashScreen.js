import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {images, icons, colors, fontSizes} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {color} from 'react-native-reanimated';

function SplashScreen(props) {
  // getter,setter
  const [authLoaded, setAuthLoaded] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true); // khi setAuthLoaded = true ( tuc la khi giao dien thay doi)
    }, 3000); // delay 3s
  }, []);

  useEffect(() => {
    // bat su kien khi authLoaded  = true thi replace screen to Login
    if (authLoaded) {
      props.navigation.replace('Login');
    }
  }, [authLoaded, props.navigation]); // thuc hien navigation

  /*
useEffect(() => { // bat su kien khi authLoaded  = true thi replace screen to Login
    if (authLoaded && animationLoaded ) {
      props.navigation.replace('Login');
    }
  }, [animationLoaded,authLoaded ,props.navigation]); // thuc hien navigation


const onAnimationFinish = () => setAnimationLoaded (true);
*/
  return (
    <View
      style={{
        // Full Screen 100%
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <ImageBackground
        source={images.backGround}
        resizeMode="center"
        style={{
          flex: 100,
        }}>
        <View>
          <Text
            style={{
              color: '#F9F8FF',
              fontFamily: 'EurostileNextLTPro-Bold',
              fontSize: 45,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 200,
            }}>
            RadioHead
          </Text>
        </View>

        {/* <Lottie 
          source={require('../assets/animations/headPhones.json')} autoPlay 
          loop = {false}
          onAnimationFinish={onAnimationFinish}
          style = {{
            width:200,
            height:200,
            
          }} /> */}
        {/* <Image // Content 
          source={images.headPhones}
          style={{
            height: 300,
            width: 300,
          }}></Image> */}
      </ImageBackground>
    </View>
  );
}

export default SplashScreen;
