import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
// import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {images, icons, colors, fontSizes} from '../constants';
import {isValidEmail, isValidPassword} from '../utilities/validation';

function LoginScreen(props) {
  /* Nguyen Duc Hoang teacher
  //navigation
  const {navigation,route} = props
  //functions of navigate to/back
  const {navigate, goBack} = navigation
  */

  const Main = () => props.navigation.navigate('Main');

  const [switchRemember, setSwitchRemember] = useState(false);
  const toggleSwitch = value => {
    setSwitchRemember(value);
  };

  const [keyboardIsShow, setKeyBoardIsShow] = useState(false);
  useEffect(() => {
    // componentDidMount
    Keyboard.addListener('keyboardDidShow', () => {
      // alert('keyboardDidShow') // keyboard hien ra
      setKeyBoardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      // alert('keyboardDidHide') // keyboard tat di
      setKeyBoardIsShow(false);
    });
  });

  // states for validating

  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  // states for store email/password

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // validation OK
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  return (
    // FULL SCREEN
    <View
      style={{
        flex: 100,
        backgroundColor: colors.primary,
      }}>
      <View // TOP SCREEN 35%
        style={{
          flex: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Image
          source={images.topLoginScreen}
          style={{
            width: 420,
            height: 230,
          }}
          resizeMode="center"></Image>
      </View>

      <View // MID SCREEN 30%
        style={{
          flex: 35,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SFProText-Bold',
            alignSelf: 'center',
            padding: 10,
            fontSize: 27,
          }}>
          Sign In
        </Text>

        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
          }}>
          <TextInput
            onChangeText={text => {
              // khi co su thay doi ve textinput , se cap nhat lai gia tri Email
              if (isValidEmail(text) == false) {
                setErrorEmail('Email not in correct format ');
              } else {
                setErrorEmail('');
              }
              setEmail(text); // input la text
            }}
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              borderRadius: 10,
              backgroundColor: '#293942',
              fontFamily: 'SFMono-Regular',
              color: '#F9F8FF',
              marginBottom: 5,
            }}
            placeholder="Email"
            placeholderTextColor={colors.placeholder}></TextInput>
          <Text
            style={{
              color: '#ff3333',
              fontSize: 12,
              fontFamily: 'SFProText-Regular',
              fontStyle: 'normal',
            }}>
            {errorEmail}
          </Text>

          <TextInput
            onChangeText={text => {
              if (isValidPassword(text) == false) {
                setErrorPassword('Password must be at least 3 characters');
              } else {
                setErrorPassword('');
              }
              setPassword(text);
            }}
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              borderRadius: 10,
              backgroundColor: '#293942',
              marginTop: 20,
              fontFamily: 'SFMono-Regular',
              color: '#F9F8FF',
            }}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={colors.placeholder}></TextInput>
          <Text
            style={{
              color: '#ff3333',
              fontSize: 12,
              fontFamily: 'SFProText-Regular',
              fontStyle: 'normal',
            }}>
            {errorPassword}
          </Text>
        </View>
      </View>

      {keyboardIsShow == false && (
        <View
          style={{
            // Bottom SCREEN 35%
            flex: 35,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            <Switch
              onValueChange={toggleSwitch}
              value={switchRemember}
              trackColor={{false: 'black', true: 'lime'}}
              style={{
                alignSelf: 'flex-start',
              }}
            />
            <Text
              style={{
                fontFamily: 'SFProText-Regular',
                fontSize: 15,
                color: '#F9F8FF',
              }}>
              {switchRemember ? 'Remembered' : 'Remember me'}
            </Text>

            <View style={{flex: 1}} />
            <TouchableOpacity
              onPress={() => {
                alert('You press forgotten password');
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'SFProText-Regular',
                  color: '#F9F8FF',
                  textDecorationLine: 'underline',
                }}>
                Forget Password
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              disabled={isValidationOK() == false}
              onPress={Main}
              style={{
                backgroundColor: '#7971E9',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                width: '50%',
                borderRadius: 50,
                marginTop: 10,
              }}>
              <Text
                style={{
                  padding: 10,
                  color: '#F4EEFF',
                  fontSize: 16,
                  fontFamily: 'SFProText-Regular',
                  textDecorationLine:
                    isValidationOK() == true
                      ? 'none'
                      : 'underline line-through',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: 40,
              alignItems: 'center',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            <View
              style={{
                height: 0.5,
                backgroundColor: '#D8D8D8',
                flex: 1,
              }}
            />
            <Text
              style={{
                padding: 5,
                fontSize: 14,
                color: '#F9F8FF',
                alignSelf: 'center',
                marginHorizontal: 8,
                fontFamily: 'SFProText-Regular',
              }}>
              OR
            </Text>
            <View
              style={{
                height: 0.5,
                backgroundColor: '#D8D8D8',
                flex: 1,
              }}
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                alert('You press Register');
              }}
              style={{
                backgroundColor: '#293942',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                width: '30%',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  padding: 10,
                  color: '#F4EEFF',
                  fontSize: 16,
                  fontFamily: 'SFProText-Regular',
                }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Icon name="linkedin" size={30} color={colors.linkedin}></Icon>
            <View style={{width: 25}} />
            <Icon name="google" size={30} color={colors.google}></Icon>
            <View style={{width: 25}} />
            <Icon name="twitter" size={30} color={colors.twitter}></Icon>
          </View>
        </View>
      )}
    </View>
  );
}

export default LoginScreen;
