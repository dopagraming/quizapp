import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BalooFont from "../comps/BalooFont"

export default function Logo() {
    BalooFont()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>בב</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('40%'), 
    height: hp('20%'),
    justifyContent:"center",
    alignItems:'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    borderRadius: 100,
    alignSelf:"center",
    top:hp(20),
    backgroundColor:"white"
  },
  text: {
    fontWeight: '600',
    fontSize: 60,
    color:"#004643",
    fontFamily:'Baloo2-Bold'
  },
});
