import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BookOpen, ChevronRight, Shield, HardHat, AlertTriangle, Wrench } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const TOPICS = [
  {
    id: 1,
    title: 'בטיחות בעבודה בגובה',
    description: 'עקרונות יסוד לעבודה בטוחה בגובה',
    icon: Shield,
    color: '#22c55e',
  },
  {
    id: 2,
    title: 'ציוד מגן אישי',
    description: 'סוגי ציוד המגן הנדרש לעבודה בגובה',
    icon: HardHat,
    color: '#3b82f6',
  },
  {
    id: 3,
    title: 'זיהוי סכנות',
    description: 'איך לזהות ולמנוע סכנות בעבודה בגובה',
    icon: AlertTriangle,
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'כלי עבודה וציוד',
    description: 'סוגי הכלים והציוד המתאים לעבודה בגובה',
    icon: Wrench,
    color: '#8b5cf6',
  },
];

export default function TopicsPage() {
  const handleTopicPress = (topic: typeof TOPICS[0]) => {
    // Navigate to topic detail page
    console.log('Navigate to topic:', topic.title);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>הסברים קצרים</Text>
        <Text style={styles.subtitle}>למד נושאים חשובים בבטיחות</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Topics List */}
        <View style={styles.topicsContainer}>
          {TOPICS.map((topic, index) => (
            <Animated.View
              key={topic.id}
              entering={FadeInDown.delay(200 + index * 100)}
            >
              <TouchableOpacity
                style={styles.topicCard}
                onPress={() => handleTopicPress(topic)}
                activeOpacity={0.8}
              >
                <View style={[styles.iconContainer, { backgroundColor: topic.color }]}>
                  <topic.icon size={24} color="#ffffff" />
                </View>
                
                <View style={styles.topicContent}>
                  <Text style={styles.topicTitle}>{topic.title}</Text>
                  <Text style={styles.topicDescription}>{topic.description}</Text>
                </View>
                
                <ChevronRight size={20} color="#666666" />
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        {/* Coming Soon Section */}
        <Animated.View entering={FadeInDown.delay(800)} style={styles.comingSoonCard}>
          <BookOpen size={32} color="#22c55e" />
          <Text style={styles.comingSoonTitle}>נושאים נוספים בקרוב</Text>
          <Text style={styles.comingSoonText}>
            אנחנו עובדים על הוספת נושאים נוספים כדי לעזור לך להכין את עצמך בצורה הטובה ביותר
          </Text>
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
  topicsContainer: {
    gap: hp(2),
    marginTop: hp(2),
  },
  topicCard: {
    backgroundColor: '#111111',
    borderRadius: 16,
    padding: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(4),
  },
  topicContent: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginBottom: hp(0.5),
  },
  topicDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    lineHeight: 20,
  },
  comingSoonCard: {
    backgroundColor: '#111111',
    borderRadius: 16,
    padding: wp(6),
    alignItems: 'center',
    marginTop: hp(4),
    marginBottom: hp(4),
    borderWidth: 1,
    borderColor: '#333333',
  },
  comingSoonTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  comingSoonText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    textAlign: 'center',
    lineHeight: 20,
  },
});