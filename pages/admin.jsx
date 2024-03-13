import { useState } from "react";
import { useQuiz } from "@/QuizeContext";
import Link from "next/link";

export default function Admin() {
  const { questions, updateQuestions } = useQuiz();
  const [nextId, setNextId] = useState(
    Math.max(...questions.map((question) => question.id)) + 1
  );

  const handleDeleteQuestion = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);

    const updatedQuestionsWithIds = updatedQuestions.map((question, index) => ({
      ...question,
      id: index,
    }));

    updateQuestions(updatedQuestionsWithIds);
  };

  const handleUpdateQuestion = (id, updatedQuestion) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? updatedQuestion : question
    );
    updateQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: nextId,
      question: "New Question",
      A: "",
      B: "",
      C: "",
      D: "",
      answer: "",
    };
    updateQuestions([...questions, newQuestion]);
    setNextId(nextId + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:underline">
        Home
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-6">Admin Panel</h1>
      <ul className="list-disc pl-4">
        {questions.map((question) => (
          <li key={question.id} className="mb-4 border-b pb-2">
            <div className="mb-2">
              <strong className="font-bold">Question:</strong>{" "}
              {question.question}
            </div>
            <div className="mb-2">
              <strong className="font-bold">Options:</strong> A: {question.A},
              B: {question.B}, C: {question.C}, D: {question.D}
            </div>
            <div className="mb-2">
              <strong className="font-bold">Answer:</strong> {question.answer}
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1 mr-2"
              onClick={() => handleDeleteQuestion(question.id)}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 text-white px-2 py-1"
              onClick={() => {
                const updatedQuestion = {
                  ...question,
                  question: prompt(
                    "Enter updated question:",
                    question.question
                  ),
                  A: prompt("Enter updated option A:", question.A),
                  B: prompt("Enter updated option B:", question.B),
                  C: prompt("Enter updated option C:", question.C),
                  D: prompt("Enter updated option D:", question.D),
                  answer: prompt("Enter updated answer:", question.answer),
                };

                handleUpdateQuestion(question.id, updatedQuestion);
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-green-500 text-white px-4 py-2 mt-4"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>
    </div>
  );
}
