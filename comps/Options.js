import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import Checkbox from './Checkbox';

export default function Options({OptionName, Positon}) {
  return (
    <View style={[styles.container, Positon &&{...Positon}]}>
        <Text style={styles.text}>{OptionName}</Text>
        <Checkbox/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:wp(90),
        height:hp(7),
        borderRadius:20,
        alignSelf:"center",
        justifyContent:"space-between",
        paddingRight:wp(8),
        alignItems:"center",
        flexDirection:"row-reverse"
    },
    text:{
        fontSize:20,
        fontWeight:"bold"

    }
})