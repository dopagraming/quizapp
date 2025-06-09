import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import BalooFont from "./BalooFont";

export default function AdjustableButton({buttonName, style, onPress}) {
    BalooFont()

return (
    <>
    <TouchableOpacity
    style={[styles.btn, style && { ...style }]}
    onPress={onPress}
    >
        <Text style={styles.text}>{buttonName}</Text>
    </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    text:{
        fontFamily:"Baloo2-SemiBold",
        color:"white",
        fontSize:24,
    },
    btn:{
        justifyContent:'center',
        alignItems:'center'
    }
})
