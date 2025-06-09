import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Moon, Sun, Type, Palette, Info, ChevronRight } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [textSize, setTextSize] = useState('medium');

  const textSizes = [
    { id: 'small', label: 'קטן', value: 'small' },
    { id: 'medium', label: 'בינוני', value: 'medium' },
    { id: 'large', label: 'גדול', value: 'large' },
  ];

  const handleTextSizeChange = (size: string) => {
    setTextSize(size);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>הגדרות</Text>
        <Text style={styles.subtitle}>התאם את האפליקציה לצרכים שלך</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Appearance Section */}
        <Animated.View entering={FadeInDown.delay(200)} style={styles.section}>
          <Text style={styles.sectionTitle}>מראה</Text>
          
          {/* Dark Mode Toggle */}
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              {isDarkMode ? (
                <Moon size={24} color="#22c55e" />
              ) : (
                <Sun size={24} color="#f59e0b" />
              )}
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>מצב כהה</Text>
                <Text style={styles.settingDescription}>
                  {isDarkMode ? 'מצב כהה פעיל' : 'מצב בהיר פעיל'}
                </Text>
              </View>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: '#333333', true: '#22c55e' }}
              thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
            />
          </View>
        </Animated.View>

        {/* Text Size Section */}
        <Animated.View entering={FadeInDown.delay(400)} style={styles.section}>
          <Text style={styles.sectionTitle}>גודל טקסט</Text>
          
          {textSizes.map((size, index) => (
            <TouchableOpacity
              key={size.id}
              style={styles.settingItem}
              onPress={() => handleTextSizeChange(size.value)}
              activeOpacity={0.8}
            >
              <View style={styles.settingLeft}>
                <Type size={24} color="#22c55e" />
                <View style={styles.settingTextContainer}>
                  <Text style={styles.settingTitle}>{size.label}</Text>
                  <Text style={styles.settingDescription}>
                    גודל טקסט {size.label.toLowerCase()}
                  </Text>
                </View>
              </View>
              <View style={[
                styles.radioButton,
                textSize === size.value && styles.radioButtonSelected
              ]}>
                {textSize === size.value && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>
          ))}
        </Animated.View>

        {/* About Section */}
        <Animated.View entering={FadeInDown.delay(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>אודות</Text>
          
          <TouchableOpacity style={styles.settingItem} activeOpacity={0.8}>
            <View style={styles.settingLeft}>
              <Info size={24} color="#22c55e" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingTitle}>מידע על האפליקציה</Text>
                <Text style={styles.settingDescription}>גרסה 1.0.0</Text>
              </View>
            </View>
            <ChevronRight size={20} color="#666666" />
          </TouchableOpacity>
        </Animated.View>

        {/* App Info Card */}
        <Animated.View entering={FadeInDown.delay(800)} style={styles.infoCard}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>בב</Text>
          </View>
          <Text style={styles.appName}>QuizApp</Text>
          <Text style={styles.appDescription}>
            אפליקציה ללימוד ובחינות בנושא בטיחות בעבודה בגובה
          </Text>
          <Text style={styles.versionText}>גרסה 1.0.0</Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingHorizontal: wp(5),
    paddingTop: hp(8),
    paddingBottom: hp(2),
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: hp(1),
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  section: {
    marginTop: hp(3),
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginBottom: hp(2),
  },
  settingItem: {
    backgroundColor: '#111111',
    borderRadius: 16,
    padding: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(1),
    borderWidth: 1,
    borderColor: '#333333',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTextContainer: {
    marginLeft: wp(3),
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginBottom: hp(0.5),
  },
  settingDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888888',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#22c55e',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22c55e',
  },
  infoCard: {
    backgroundColor: '#111111',
    borderRadius: 20,
    padding: wp(6),
    alignItems: 'center',
    marginTop: hp(4),
    marginBottom: hp(4),
    borderWidth: 1,
    borderColor: '#333333',
  },
  logoContainer: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  logoText: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  appName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginBottom: hp(1),
  },
  appDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: hp(2),
  },
  versionText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666666',
  },
});