import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LoginBackgroundImg from '../comps/LoginBackgroundImg';
import Logo from '../comps/Logo';
import BalooFont from "../comps/BalooFont"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Input from '../comps/Input';
import Btns from '../comps/AdjustableButton';

export default function RegesterationPage() {
  BalooFont()
  return (
    <View style={styles.container}>
      <LoginBackgroundImg />
      <View style={styles.content}>
        <Logo />
        <Text style={styles.text}>Enter your name</Text>
        <Input
        style={{
          top:hp(32),
          left:wp(5)
        }}
        />
        <Btns
        buttonName={"Start"}
        style={{
          backgroundColor:"#F8C660",
          width:wp(94),
          height:hp(7),
          borderRadius:15,
          left:wp(3),
          top:hp(58)
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  text:{
    color:'white',
    fontSize:18,
    paddingLeft:wp(3),
    top:hp(30),
    fontFamily:"Baloo2-SemiBold", 
  }
});
