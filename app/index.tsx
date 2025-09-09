import { useState } from "react";
import QuizScreen from "../components/QuizScreen";
import ResultScreen from "../components/ResultScreen";
import HomeScreen from "../components/HomeScreen";
import questionsData from "../questions.json";

// Tipos
type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizKey = "quiz1" | "quiz2" | "quiz3";

type Questions = {
  quiz1: Question[];
  quiz2: Question[];
  quiz3: Question[];
};

const questions: Questions = questionsData;

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState<"home" | "quiz" | "result">("home");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [randomQuiz, setRandomQuiz] = useState<QuizKey | null>(null);

  // --- INICIAR QUIZ ---
  const startQuiz = () => {
    const quiz = `quiz${Math.floor(Math.random() * 3) + 1}` as QuizKey;
    setRandomQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionsDisabled(false);
    setScore(0);
    setCurrentScreen("quiz");
  };

  if (!randomQuiz && currentScreen === "quiz") return null; // segurança

  const currentQuestion = randomQuiz ? questions[randomQuiz][currentQuestionIndex] : null;

  // --- MANIPULADORES ---
  const handleOptionPress = (option: string) => {
    if (!currentQuestion) return;
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(option);
    setIsOptionsDisabled(true);
  };

  const handleNextQuestion = () => {
    if (!randomQuiz || !currentQuestion) return;

    if (currentQuestionIndex < questions[randomQuiz].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsOptionsDisabled(false);
    } else {
      setCurrentScreen("result");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionsDisabled(false);
    setScore(0);
    setRandomQuiz(null);
  };

  const handlePlayAgain = () => {
    resetQuiz();
    startQuiz(); // sorteia novo quiz
  };

  const handleGoHome = () => {
    resetQuiz();
    setCurrentScreen("home");
  };

  // --- RENDERIZAÇÃO ---
  if (currentScreen === "home") {
    return <HomeScreen onStart={startQuiz} />;
  }

  if (currentScreen === "quiz" && currentQuestion) {
    return (
      <QuizScreen
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        isOptionsDisabled={isOptionsDisabled}
        onOptionPress={handleOptionPress}
        onNextQuestion={handleNextQuestion}
      />
    );
  }

  if (currentScreen === "result") {
    return (
      <ResultScreen
        score={score}
        totalQuestions={randomQuiz ? questions[randomQuiz].length : 0}
        onPlayAgain={handlePlayAgain}
        onGoHome={handleGoHome}
      />
    );
  }

  return null;
}
