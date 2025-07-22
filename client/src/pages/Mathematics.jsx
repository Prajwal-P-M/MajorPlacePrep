import React, { useEffect, useState } from "react";

const questionBank = [
  { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: "12" },
  { question: "A train travels 180 km in 3 hours. What is its average speed?", options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"], answer: "60 km/h" },
  { question: "If 3x + 2 = 11, what is the value of x?", options: ["3", "2", "5", "4"], answer: "3" },
  { question: "What is 25% of 200?", options: ["40", "50", "60", "70"], answer: "50" },
  { question: "Simplify: 15 + 3 × 2 – 8 ÷ 4", options: ["19", "20", "21", "22"], answer: "19" },
  { question: "A shopkeeper sells an item for ₹240, making a profit of 20%. What was the cost price?", options: ["₹200", "₹210", "₹220", "₹230"], answer: "₹200" },
  { question: "If the simple interest on ₹1000 at 5% per annum for 2 years is:", options: ["₹50", "₹100", "₹150", "₹200"], answer: "₹100" },
  { question: "What is the LCM of 12 and 18?", options: ["36", "72", "24", "48"], answer: "36" },
  { question: "A number when divided by 5 leaves a remainder 2. What will be the remainder when the same number is divided by 10?", options: ["2", "4", "5", "7"], answer: "7" },
  { question: "How many prime numbers are there between 10 and 30?", options: ["4", "5", "6", "7"], answer: "6" },
  { question: "If a car covers 90 km in 1.5 hours, what is its speed?", options: ["45 km/h", "50 km/h", "55 km/h", "60 km/h"], answer: "60 km/h" },
  { question: "What is the value of (2³ × 3²)?", options: ["36", "48", "72", "54"], answer: "72" },
  { question: "The average of 4, 8, 12, and 16 is:", options: ["8", "10", "12", "14"], answer: "10" },
  { question: "If 12 men can complete a work in 15 days, how many days will 10 men take to complete the same work?", options: ["18", "20", "16", "22"], answer: "18" },
  { question: "What is 0.25 as a fraction?", options: ["1/2", "1/4", "1/3", "2/5"], answer: "1/4" },
  { question: "A man buys an article for ₹500 and sells it at a loss of 10%. What is the selling price?", options: ["₹450", "₹460", "₹470", "₹480"], answer: "₹450" },
  { question: "If x = 4 and y = 5, what is the value of x² + y²?", options: ["41", "42", "43", "44"], answer: "41" },
  { question: "The ratio of 2:3 is equal to:", options: ["4:6", "6:9", "8:12", "All of the above"], answer: "All of the above" },
  { question: "What is the next number in the sequence: 2, 4, 8, 16, ?", options: ["24", "30", "32", "36"], answer: "32" },
  { question: "If the perimeter of a square is 40 cm, what is the length of one side?", options: ["10 cm", "8 cm", "12 cm", "16 cm"], answer: "10 cm" }
];


const getRandomQuestions = () => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15);
};

const Mathematics = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const selected = getRandomQuestions();
    setQuestions(selected);
  }, []);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = 0;

    questions.forEach((q, i) => {
      const key = `q${i + 1}`;
      if (answers[key] === q.answer) result++;
    });

    setScore(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Mathematics Quiz</h1>
        <form onSubmit={handleSubmit}>
          {questions.map((q, index) => (
            <div key={index} className="mb-6">
              <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
              {q.options.map((option, i) => (
                <label key={i} className="block mb-1">
                  <input
                    type="radio"
                    name={`q${index + 1}`}
                    value={option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        {score !== null && (
          <div className="mt-6 text-center text-xl font-bold text-green-600">
            You got {score} out of 15 correct!
          </div>
        )}
      </div>
    </div>
  );
};

export default Mathematics;