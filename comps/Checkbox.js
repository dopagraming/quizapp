import { useState } from "react"
import { Switch, StyleSheet, View, Text } from "react-native"
import { CheckBox } from 'react-native-elements';
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function Checkbox({style}) {
    const [isChecked, SetIsChecked] = useState(false) 
    const toggleSwitch = ()=> SetIsChecked(previousState=>!previousState)
  return (
    <View style={[styles.view, style && {...style}]}>
        <CheckBox
        checked={isChecked}
        onPress={() => SetIsChecked(!isChecked)}
        checkedColor="#81b0ff"
        uncheckedColor="#767577"
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxText}
        checkedIcon={
          <View style={styles.circularChecked}>
            <Text style={styles.checkMark}>✔️</Text>
          </View>
        }
        uncheckedIcon={
          <View style={styles.circularUnchecked} />
        }
      />
    </View>


  )
}

const styles = StyleSheet.create({
    view:{
        width:0
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        margin: 0,
      },
      circularChecked: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#539784',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#539784"
      },
      checkMark: {
        fontSize: 14,
        color: '#81b0ff',
      },
      circularUnchecked: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#767577',
      },
      checkboxText: {
        fontSize: 16,
      },
      checkMark: {
        fontSize: 14,
        color: '#81b0ff',
      },
})
