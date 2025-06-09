import React from 'react'
import { Text , StyleSheet} from 'react-native'
import BalooFont from "../comps/BalooFont";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeText() {
    BalooFont()    
  return (
   <Text style={Styles.text}>ברוכים הבאים</Text>
  )
}

const Styles = StyleSheet.create({
    text:{
        fontSize:48,
        fontFamily:"Baloo2-ExtraBold",
        color:'#322121',
        textAlign:"center",
        top:hp(20)
    }
})