
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Btn from '../comps/Btn';
import WelcomeText from '../comps/WelcomeText';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();
  const AllTheQustionsPage = () => {
    navigation.navigate("AllTheQustionsPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <WelcomeText />
        <Btn
          BtnName={"כל השאלות"}
          style={{ top: hp(40) }}
          onPress={AllTheQustionsPage}
        />
        <Btn
          BtnName={"מבחן 55 שאלה (מה״ט)"}
          style={{ top: hp(45) }}
          onPress={()=>{navigation.navigate("QuizPage")}}
        />
        <Btn
          BtnName={"הסברים קצרים"}
          style={{ top: hp(50) }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF0F3",
    width: wp(100),
    height: hp(100),
    
  }
});
