import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BalooFont from "../comps/BalooFont";

export default function Input({ style }) {
  BalooFont(); 

  return (
    <TextInput
      placeholder='John Deh...'
      placeholderTextColor="white"
      style={[styles.inputStyle, style && { ...style }]}
    />
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: wp(90),
    height: hp(7),
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    fontFamily: "Baloo2-Regular",
    paddingLeft: wp(5),
  },
});
