import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Question({Qname}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{Qname}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:wp(90),
        height:hp(24),
        alignSelf:"center",
        borderRadius:15,
        elevation:10,
        shadowColor:'#000',
        shadowOffset:{width:0, height:4},
        shadowOpacity:0.3,
        shadowRadius:10,
        justifyContent:"center",
        alignItems:"center",
        top:hp(5)
    },
    text:{
        fontSize:18,
        fontWeight:"bold"
    }
})
