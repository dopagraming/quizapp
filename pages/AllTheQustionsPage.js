
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Question from '../comps/Question';
import Options from '../comps/Options';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NextBtn from '../comps/NextBtn';

export default function AllTheQustionsPage() {
        return (
                <View style={styles.container}>
                        <Question Qname={'מה מם תחומי עבודה בגובה'} />
                        <Options
                                OptionName={"מעל סולמות"}
                                Positon={{
                                        top: hp(10)
                                }}
                        />
                        <Options
                                OptionName={"סל הרמה"}
                                Positon={{
                                        top: hp(12)
                                }}
                        />
                        <Options
                                OptionName={"במות הרמה ופיגום ממוכן "}
                                Positon={{
                                        top: hp(14)
                                }}
                        />
                        <Options
                                OptionName={"מעל גגות"}
                                Positon={{
                                        top: hp(16)
                                }}
                        />
                        <Options
                                OptionName={"חלל מוקף"}
                                Positon={{
                                        top: hp(18)
                                }}
                        />

                        <NextBtn
                                position={{
                                        top: hp(23)
                                }}
                        />
                </View>
        );
}

const styles = StyleSheet.create({
        container: {

        },
});
