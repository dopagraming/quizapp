import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Btn from './Btn'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function NextBtn({position})  {
  return (
    <View>
      <TouchableOpacity
      style={[styles.Btn, position &&{...position}]}
      >
            <Text style={styles.NextText}>המשך</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    NextText:{
        color:'white',
        fontSize:22,
        fontWeight:"bold"
    },
    Btn:{
        width:wp(90),
        backgroundColor:"#004643",
        height:hp(6.5),
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },

})
