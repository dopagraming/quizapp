import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BookOpen, Brain, GraduationCap, TrendingUp } from 'lucide-react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function HomePage() {
  const navigateToQuestions = () => {
    router.push('/questions');
  };

  const navigateToQuiz = () => {
    router.push('/quiz');
  };

  const navigateToTopics = () => {
    router.push('/topics');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Header */}
        <Animated.View entering={FadeInUp.delay(200)} style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>בב</Text>
          </View>
          <Text style={styles.welcomeText}>ברוכים הבאים</Text>
          <Text style={styles.subtitleText}>מערכת לימוד ובחינות מתקדמת</Text>
        </Animated.View>

        {/* Stats Cards */}
        <Animated.View entering={FadeInDown.delay(400)} style={styles.statsContainer}>
          <View style={styles.statCard}>
            <TrendingUp size={24} color="#22c55e" />
            <Text style={styles.statNumber}>95%</Text>
            <Text style={styles.statLabel}>הצלחה</Text>
          </View>
          <View style={styles.statCard}>
            <Brain size={24} color="#22c55e" />
            <Text style={styles.statNumber}>1,200+</Text>
            <Text style={styles.statLabel}>שאלות</Text>
          </View>
          <View style={styles.statCard}>
            <GraduationCap size={24} color="#22c55e" />
            <Text style={styles.statNumber}>50+</Text>
            <Text style={styles.statLabel}>נושאים</Text>
          </View>
        </Animated.View>

        {/* Action Cards */}
        <Animated.View entering={FadeInDown.delay(600)} style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionCard, styles.primaryCard]}
            onPress={navigateToQuiz}
            activeOpacity={0.8}
          >
            <View style={styles.cardIcon}>
              <Brain size={32} color="#000" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>מבחן 55 שאלה</Text>
              <Text style={styles.cardSubtitle}>בחן את עצמך במבחן מקיף</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionCard, styles.secondaryCard]}
            onPress={navigateToQuestions}
            activeOpacity={0.8}
          >
            <View style={styles.cardIcon}>
              <BookOpen size={32} color="#22c55e" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>כל השאלות</Text>
              <Text style={styles.cardSubtitle}>עיין בכל השאלות והתשובות</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionCard, styles.secondaryCard]}
            onPress={navigateToTopics}
            activeOpacity={0.8}
          >
            <View style={styles.cardIcon}>
              <GraduationCap size={32} color="#22c55e" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>הסברים קצרים</Text>
              <Text style={styles.cardSubtitle}>למד נושאים חשובים</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(8),
  },
  header: {
    alignItems: 'center',
    marginBottom: hp(4),
  },
  logoContainer: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
    shadowColor: '#22c55e',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  logoText: {
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: hp(1),
  },
  subtitleText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(4),
  },
  statCard: {
    flex: 1,
    backgroundColor: '#111111',
    borderRadius: 16,
    padding: wp(4),
    alignItems: 'center',
    marginHorizontal: wp(1),
    borderWidth: 1,
    borderColor: '#333333',
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginTop: hp(1),
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    marginTop: hp(0.5),
  },
  actionsContainer: {
    gap: hp(2),
  },
  actionCard: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: wp(5),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryCard: {
    backgroundColor: '#22c55e',
  },
  secondaryCard: {
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#333333',
  },
  cardIcon: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(4),
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginBottom: hp(0.5),
  },
  cardSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#cccccc',
  },
});