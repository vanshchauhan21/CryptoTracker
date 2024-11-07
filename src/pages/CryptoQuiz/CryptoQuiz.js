
import React, { useState, useEffect } from 'react';
import './CryptoQuiz.css';
import Header from '../../components/Common/Header';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confetti from 'canvas-confetti';
import Timer from './Timer'; 

const CryptoQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); 
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem('cryptoQuizHighScore') || 0
  );
  const [difficulty, setDifficulty] = useState('medium');
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = {
    easy: [
      {
        questionText: 'Who created Bitcoin?',
        answerOptions: [
          { answerText: 'Vitalik Buterin', isCorrect: false },
          { answerText: 'Satoshi Nakamoto', isCorrect: true },
          { answerText: 'Charlie Lee', isCorrect: false },
          { answerText: 'Nick Szabo', isCorrect: false },
        ],
        explanation: 'Satoshi Nakamoto is the pseudonymous creator of Bitcoin who published the Bitcoin whitepaper in 2008.',
      },
      {
        questionText: 'What is a cryptocurrency wallet?',
        answerOptions: [
          { answerText: 'A physical wallet for coins', isCorrect: false },
          { answerText: 'A bank account', isCorrect: false },
          { answerText: 'A digital tool to store crypto', isCorrect: true },
          { answerText: 'A trading platform', isCorrect: false },
        ],
        explanation: 'A cryptocurrency wallet is a digital tool that allows you to store, send, and receive cryptocurrencies.',
      },
      {
        questionText: 'What does HODL mean in crypto terms?',
        answerOptions: [
          { answerText: 'Hold On for Dear Life', isCorrect: true },
          { answerText: 'Hope Our Deposits Last', isCorrect: false },
          { answerText: 'Having Only Digital Losses', isCorrect: false },
          { answerText: 'Hoping On Double Luck', isCorrect: false },
        ],
        explanation: 'HODL originated from a misspelling of "hold" and became a popular term meaning to hold onto your cryptocurrencies long-term.',
      },
      {
        questionText: 'Which cryptocurrency is known as "digital silver"?',
        answerOptions: [
          { answerText: 'Bitcoin', isCorrect: false },
          { answerText: 'Ethereum', isCorrect: false },
          { answerText: 'Litecoin', isCorrect: true },
          { answerText: 'Ripple', isCorrect: false },
        ],
        explanation: 'Litecoin is often referred to as "digital silver" while Bitcoin is known as "digital gold".',
      },
    ],
    medium: [
      {
        questionText: 'What is the maximum supply of Bitcoin?',
        answerOptions: [
          { answerText: '21 Million', isCorrect: true },
          { answerText: '100 Million', isCorrect: false },
          { answerText: '18 Million', isCorrect: false },
          { answerText: 'Unlimited', isCorrect: false },
        ],
        explanation: 'Bitcoin has a fixed maximum supply of 21 million coins, which helps maintain its value through scarcity.',
      },
      {
        questionText: 'What is a smart contract?',
        answerOptions: [
          { answerText: 'A legal cryptocurrency document', isCorrect: false },
          { answerText: 'Self-executing code on blockchain', isCorrect: true },
          { answerText: 'A trading agreement', isCorrect: false },
          { answerText: 'A type of cryptocurrency', isCorrect: false },
        ],
        explanation: 'Smart contracts are self-executing contracts with the terms directly written into code on the blockchain.',
      },
      {
        questionText: 'What is the purpose of a consensus mechanism?',
        answerOptions: [
          { answerText: 'To validate transactions', isCorrect: true },
          { answerText: 'To create new tokens', isCorrect: false },
          { answerText: 'To store data', isCorrect: false },
          { answerText: 'To trade cryptocurrencies', isCorrect: false },
        ],
        explanation: 'Consensus mechanisms ensure all nodes in a blockchain network agree on the valid state of the network.',
      },
      {
        questionText: 'What is a blockchain fork?',
        answerOptions: [
          { answerText: 'A cryptocurrency splitting tool', isCorrect: false },
          { answerText: 'A division in the blockchain', isCorrect: true },
          { answerText: 'A trading strategy', isCorrect: false },
          { answerText: 'A type of wallet', isCorrect: false },
        ],
        explanation: 'A blockchain fork occurs when a blockchain diverges into two paths, either due to a protocol change or a network split.',
      },
      {
        questionText: 'What is DeFi?',
        answerOptions: [
          { answerText: 'Decentralized Finance', isCorrect: true },
          { answerText: 'Digital Financial Institution', isCorrect: false },
          { answerText: 'Defined Financial Index', isCorrect: false },
          { answerText: 'Direct Finance Investment', isCorrect: false },
        ],
        explanation: 'DeFi (Decentralized Finance) refers to financial services using smart contracts and blockchain technology.',
      },
    ],
    hard: [
      {
        questionText: 'What is the name of the Ethereum upgrade that implemented proof-of-stake?',
        answerOptions: [
          { answerText: 'London', isCorrect: false },
          { answerText: 'Berlin', isCorrect: false },
          { answerText: 'The Merge', isCorrect: true },
          { answerText: 'Constantinople', isCorrect: false },
        ],
        explanation: 'The Merge was a significant upgrade that transitioned Ethereum from proof-of-work to proof-of-stake in 2022.',
      },
      {
        questionText: 'What is the Byzantine Generals Problem?',
        answerOptions: [
          { answerText: 'A military strategy game', isCorrect: false },
          { answerText: 'A consensus problem in distributed systems', isCorrect: true },
          { answerText: 'A cryptocurrency trading pattern', isCorrect: false },
          { answerText: 'A type of blockchain attack', isCorrect: false },
        ],
        explanation: 'The Byzantine Generals Problem describes the difficulty of reaching consensus in a distributed system where participants may be unreliable.',
      },
      {
        questionText: 'What is a Merkle Tree in blockchain?',
        answerOptions: [
          { answerText: 'A data structure for efficient verification', isCorrect: true },
          { answerText: 'A type of cryptocurrency', isCorrect: false },
          { answerText: 'A blockchain explorer', isCorrect: false },
          { answerText: 'A mining algorithm', isCorrect: false },
        ],
        explanation: 'A Merkle Tree is a data structure used in blockchain to efficiently verify the integrity of large sets of data.',
      },
      {
        questionText: 'What is a zero-knowledge proof?',
        answerOptions: [
          { answerText: 'A type of blockchain security', isCorrect: false },
          { answerText: 'A proof without revealing information', isCorrect: true },
          { answerText: 'A mining technique', isCorrect: false },
          { answerText: 'A type of smart contract', isCorrect: false },
        ],
        explanation: 'Zero-knowledge proofs allow one party to prove to another that a statement is true without revealing any information beyond the validity of the statement.',
      },
    ],
  };

  useEffect(() => {
    if (quizStarted && timeLeft > 0 && !showScore) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showScore) {
      handleTimeout();
    }
  }, [timeLeft, quizStarted, showScore]);

  const handleTimeout = () => {
    setShowScore(true);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('cryptoQuizHighScore', score);
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleAnswerClick = (isCorrect, index) => {
    setSelectedAnswer(index);

    setTimeout(() => {
      if (isCorrect) {
        setScore(score + 1);
        setStreak(streak + 1);
        toast.success('Correct Answer! 🎉');
        if (streak === 2) {
          triggerConfetti();
          toast.success('Perfect Streak! 🔥');
        }
      } else {
        setStreak(0);
        toast.error('Wrong Answer! 😢');
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions[difficulty].length) {
        setCurrentQuestion(nextQuestion);
        setTimeLeft(30);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem('cryptoQuizHighScore', score);
          triggerConfetti();
        }
      }
    }, 1000);
  };

  const handleStartQuiz = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setQuizStarted(true);
    setTimeLeft(30);
    toast.info(`Starting ${selectedDifficulty} difficulty quiz!`);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setQuizStarted(false);
    setStreak(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
  };

  if (!quizStarted) {
    return (
      <>
        <Header />
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="quiz-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="difficulty-selection"
          >
            <h2>Choose Difficulty</h2>
            <div className="difficulty-buttons">
              <button onClick={() => handleStartQuiz('easy')}>Easy</button>
              <button onClick={() => handleStartQuiz('medium')}>Medium</button>
              <button onClick={() => handleStartQuiz('hard')}>Hard</button>
            </div>
            <div className="high-score">
              High Score: {highScore}
            </div>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="quiz-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="quiz-box"
        >
          {showScore ? (
            <div className="score-section">
              <h2>Quiz Completed!</h2>
              <p>You scored {score} out of {questions[difficulty].length}</p>
              {score > highScore && <p className="new-high-score">New High Score! 🏆</p>}
              <div className="stats">
                <p>Accuracy: {((score / questions[difficulty].length) * 100).toFixed(1)}%</p>
                <p>High Score: {highScore}</p>
              </div>
              <button className="restart-button" onClick={handleRestartQuiz}>
                Play Again
              </button>
            </div>
          ) : (
            <>
              <div className="quiz-header">
                <div className="stats-bar">
                  <span>Score: {score}</span>
                  <span>Streak: {streak}</span>
                  <Timer timeLeft={timeLeft} />
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress"
                    style={{ width: `${(currentQuestion / questions[difficulty].length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions[difficulty ].length}
                </div>
                <div className="question-text">
                  {questions[difficulty][currentQuestion].questionText}
                </div>
                <div className="explanation">
                  {selectedAnswer !== null && (
                    <p>{questions[difficulty][currentQuestion].explanation}</p>
                  )}
                </div>
              </div>
              <div className="answer-section">
                {questions[difficulty][currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    className={`answer-button ${selectedAnswer === index ? (answerOption.isCorrect ? 'correct' : 'incorrect') : ''}`}
                    onClick={() => handleAnswerClick(answerOption.isCorrect, index)}
                    disabled={selectedAnswer !== null}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default CryptoQuiz;