import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Btn({BtnName, style, onPress}) {
  return (
    <TouchableOpacity
    style={[styles.btn, style && {...style}]}
    onPress={onPress}
    >
        <Text style={styles.BtnName}>{BtnName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'white',
        width:wp(90),
        height:hp(7),
        borderRadius:15,
        justifyContent:"center",
        alignSelf:"center"
    },
    BtnName:{
        fontSize:20,
        paddingRight:wp(3),
        textAlign:"right"
    }
})