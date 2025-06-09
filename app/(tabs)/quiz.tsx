import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronRight, Clock, Trophy, X } from 'lucide-react-native';
import Animated, { FadeInDown, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'מה מם תחומי עבודה בגובה?',
    options: [
      'מעל סולמות',
      'סל הרמה',
      'במות הרמה ופיגום ממוכן',
      'מעל גגות'
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
  // Add more questions to reach 55
].concat(Array.from({ length: 53 }, (_, i) => ({
  id: i + 3,
  question: `שאלה מספר ${i + 3} - מהו הנוהל הנכון לעבודה בגובה?`,
  options: [
    'אפשרות א',
    'אפשרות ב',
    'אפשרות ג',
    'אפשרות ד'
  ],
  correctAnswer: Math.floor(Math.random() * 4)
})));

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const progressWidth = useSharedValue(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;
    progressWidth.value = withTiming(progress, { duration: 300 });
  }, [currentQuestionIndex]);

  const progressStyle = useAnimatedStyle(() => ({
    width: `${progressWidth.value}%`,
  }));

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = {
      ...selectedAnswers,
      [currentQuestionIndex]: selectedOption
    };
    setSelectedAnswers(newAnswers);

    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleExit = () => {
    Alert.alert(
      'יציאה מהמבחן',
      'האם אתה בטוח שברצונך לצאת מהמבחן?',
      [
        { text: 'ביטול', style: 'cancel' },
        { text: 'יציאה', style: 'destructive', onPress: () => {
          setCurrentQuestionIndex(0);
          setSelectedAnswers({});
          setSelectedOption(null);
          setShowResults(false);
          setTimeElapsed(0);
        }}
      ]
    );
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(selectedAnswers).forEach(([questionIndex, answer]) => {
      if (QUIZ_QUESTIONS[parseInt(questionIndex)].correctAnswer === answer) {
        correct++;
      }
    });
    return Math.round((correct / QUIZ_QUESTIONS.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <View style={styles.resultsContainer}>
        <Animated.View entering={FadeInDown} style={styles.resultsCard}>
          <Trophy size={64} color="#22c55e" />
          <Text style={styles.resultsTitle}>המבחן הושלם!</Text>
          <Text style={styles.scoreText}>{score}%</Text>
          <Text style={styles.resultsSubtitle}>
            ענית נכון על {Object.entries(selectedAnswers).filter(([index, answer]) => 
              QUIZ_QUESTIONS[parseInt(index)].correctAnswer === answer
            ).length} מתוך {QUIZ_QUESTIONS.length} שאלות
          </Text>
          <Text style={styles.timeText}>זמן: {formatTime(timeElapsed)}</Text>
          
          <TouchableOpacity
            style={styles.restartButton}
            onPress={() => {
              setCurrentQuestionIndex(0);
              setSelectedAnswers({});
              setSelectedOption(null);
              setShowResults(false);
              setTimeElapsed(0);
            }}
          >
            <Text style={styles.restartButtonText}>התחל מחדש</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={handleExit} style={styles.exitButton}>
            <X size={24} color="#ffffff" />
          </TouchableOpacity>
          <View style={styles.timeContainer}>
            <Clock size={16} color="#888888" />
            <Text style={styles.timeText}>{formatTime(timeElapsed)}</Text>
          </View>
        </View>
        
        <Text style={styles.title}>מבחן 55 שאלה</Text>
        <Text style={styles.progress}>
          שאלה {currentQuestionIndex + 1} מתוך {QUIZ_QUESTIONS.length}
        </Text>
        
        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <Animated.View style={[styles.progressBar, progressStyle]} />
        </View>
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
            >
              <TouchableOpacity
                style={[
                  styles.optionCard,
                  selectedOption === index && styles.selectedOption
                ]}
                onPress={() => handleOptionSelect(index)}
                activeOpacity={0.8}
              >
                <View style={[
                  styles.optionIndicator,
                  selectedOption === index && styles.selectedIndicator
                ]} />
                <Text style={[
                  styles.optionText,
                  selectedOption === index && styles.selectedOptionText
                ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        {/* Next Button */}
        <Animated.View entering={FadeInDown.delay(800)}>
          <TouchableOpacity
            style={[
              styles.nextButton,
              selectedOption === null && styles.disabledButton
            ]}
            onPress={handleNext}
            disabled={selectedOption === null}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.nextButtonText,
              selectedOption === null && styles.disabledButtonText
            ]}>
              {isLastQuestion ? 'סיום המבחן' : 'שאלה הבאה'}
            </Text>
            <ChevronRight size={20} color={selectedOption === null ? "#666666" : "#000"} />
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
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  exitButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#888888',
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
    marginBottom: hp(2),
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#333333',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#22c55e',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  questionCard: {
    backgroundColor: '#111111',
    borderRadius: 20,
    padding: wp(6),
    marginTop: hp(2),
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
  },
  selectedOption: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  optionIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666666',
    marginRight: wp(3),
  },
  selectedIndicator: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#ffffff',
    flex: 1,
  },
  selectedOptionText: {
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
  disabledButton: {
    backgroundColor: '#333333',
    shadowOpacity: 0,
  },
  nextButtonText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#000000',
    marginRight: wp(2),
  },
  disabledButtonText: {
    color: '#666666',
  },
  resultsContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  resultsCard: {
    backgroundColor: '#111111',
    borderRadius: 20,
    padding: wp(8),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    width: '100%',
  },
  resultsTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  scoreText: {
    fontSize: 48,
    fontFamily: 'Inter-Bold',
    color: '#22c55e',
    marginBottom: hp(1),
  },
  resultsSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  restartButton: {
    backgroundColor: '#22c55e',
    borderRadius: 16,
    padding: wp(4),
    marginTop: hp(2),
    width: '100%',
    alignItems: 'center',
  },
  restartButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#000000',
  },
});