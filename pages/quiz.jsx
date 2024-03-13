import { useState } from "react";
import { useQuiz } from "@/QuizeContext";
import Link from "next/link";

export default function Quiz() {
  const { questions, selectedAnswer, updateSelectedAnswer } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
    updateSelectedAnswer(null);
  };

  const totalQuestions = questions.length;

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Quiz</h1>
      {currentQuestion < questions.length ? (
        <div>
          <p>{questions[currentQuestion].question}</p>
          {Object.keys(questions[currentQuestion])
            .filter(
              (option) =>
                option !== "id" && option !== "question" && option !== "answer"
            )
            .map(
              (option) =>
                option !== "answer" && (
                  <button
                    key={option}
                    onClick={() => handleAnswerClick(option)}
                    disabled={selectedAnswer !== null}
                  >
                    {option}: {questions[currentQuestion][option]}
                  </button>
                )
            )}
        </div>
      ) : (
        <div>
          <p>
            Quiz completed! Your score: {score}/{totalQuestions}
          </p>
        </div>
      )}
    </div>
  );
}
