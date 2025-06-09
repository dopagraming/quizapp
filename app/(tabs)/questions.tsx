import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronRight, CheckCircle } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const SAMPLE_QUESTIONS = [
  {
    id: 1,
    question: 'מה מם תחומי עבודה בגובה?',
    options: [
      'מעל סולמות',
      'סל הרמה',
      'במות הרמה ופיגום ממוכן',
      'מעל גגות',
      'חלל מוקף'
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: 'מהו הגובה המינימלי הנחשב לעבודה בגובה?',
    options: [
      '1.5 מטר',
      '2 מטר',
      '2.5 מטר',
      '3 מטר'
    ],
    correctAnswer: 1
  },
  // Add more questions as needed
];

export default function QuestionsPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  const currentQuestion = SAMPLE_QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === SAMPLE_QUESTIONS.length - 1;

  const handleNext = () => {
    if (isLastQuestion) {
      setShowCompletion(true);
      setTimeout(() => {
        // Navigate back to home after showing completion message
        setShowCompletion(false);
        setCurrentQuestionIndex(0);
      }, 2000);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  if (showCompletion) {
    return (
      <View style={styles.completionContainer}>
        <Animated.View entering={FadeInDown} style={styles.completionCard}>
          <CheckCircle size={64} color="#22c55e" />
          <Text style={styles.completionTitle}>כל הכבוד!</Text>
          <Text style={styles.completionText}>סיימת לעבור על כל השאלות</Text>
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>כל השאלות</Text>
        <Text style={styles.progress}>
          שאלה {currentQuestionIndex + 1} מתוך {SAMPLE_QUESTIONS.length}
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <Animated.View entering={FadeInDown.delay(200)} style={styles.questionCard}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </Animated.View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <Animated.View
              key={index}
              entering={FadeInDown.delay(300 + index * 100)}
              style={[
                styles.optionCard,
                index === currentQuestion.correctAnswer && styles.correctOption
              ]}
            >
              <Text style={[
                styles.optionText,
                index === currentQuestion.correctAnswer && styles.correctOptionText
              ]}>
                {option}
              </Text>
              {index === currentQuestion.correctAnswer && (
                <CheckCircle size={20} color="#000" />
              )}
            </Animated.View>
          ))}
        </View>

        {/* Next Button */}
        <Animated.View entering={FadeInDown.delay(800)}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>
              {isLastQuestion ? 'סיום' : 'המשך'}
            </Text>
            <ChevronRight size={20} color="#000" />
          </TouchableOpacity>
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
  progress: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  questionCard: {
    backgroundColor: '#111111',
    borderRadius: 20,
    padding: wp(6),
    marginBottom: hp(3),
    borderWidth: 1,
    borderColor: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 26,
  },
  optionsContainer: {
    gap: hp(1.5),
    marginBottom: hp(4),
  },
  optionCard: {
    backgroundColor: '#111111',
    borderRadius: 16,
    padding: wp(4),
    borderWidth: 1,
    borderColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  correctOption: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#ffffff',
    flex: 1,
  },
  correctOptionText: {
    color: '#000000',
  },
  nextButton: {
    backgroundColor: '#22c55e',
    borderRadius: 16,
    padding: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(4),
    shadowColor: '#22c55e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  nextButtonText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#000000',
    marginRight: wp(2),
  },
  completionContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  completionCard: {
    backgroundColor: '#111111',
    borderRadius: 20,
    padding: wp(8),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  completionTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  completionText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    textAlign: 'center',
  },
});