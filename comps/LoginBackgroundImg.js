import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function LoginBackgroundImg() {
  return (
    <ImageBackground
      source={require('../assets/background(Quiz).png')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'cover',
  
  },
  overlay: {
    top:0,
    left:0,
    width: wp('100%'),
    height: hp('100%'),
    resizeMode:'cover',
    backgroundColor: 'rgba(0, 70, 67, 0.7)',
  },
});
