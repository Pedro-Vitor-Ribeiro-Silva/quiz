import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type ResultScreenProps = {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onGoHome: () => void;
};

export default function ResultScreen({
  score,
  totalQuestions,
  onPlayAgain,
  onGoHome,
}: ResultScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>
          Você acertou {score} de {totalQuestions} perguntas!
        </Text>
      </View>

      <TouchableOpacity style={styles.playAgainButton} onPress={onPlayAgain}>
        <Text style={styles.playAgainButtonText}>Jogar Novamente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.goHomeButton} onPress={onGoHome}>
        <Text style={styles.goHomeButtonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 40,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  scoreContainer: {
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 20,
    marginBottom: 40,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#34495e",
    textAlign: "center",
  },
  playAgainButton: {
    backgroundColor: "#ff6b6b",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 3,
  },
  playAgainButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  goHomeButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
  },
  goHomeButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
