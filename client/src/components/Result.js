import React from 'react';
import '../styles/Result.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

export default function Result() {
    const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10);
    const passed = flagResult(totalPoints, earnPoints);

    return (
        <div className="container">
            <h1 className="title">MERN Quiz Results</h1>

            <div className="result-container">
                {/* Result Summary */}
                <div className="result-card">
                    <h3>Result Summary</h3>
                    <span className="label">Username:</span>
                    <span className="value">{userId || 'N/A'}</span>
                    <span className="label">Total Questions:</span>
                    <span className="value">{queue.length || 0}</span>
                    <span className="label">Total Attempts:</span>
                    <span className="value">{attempts || 0}</span>
                    <span className="label">Total Earned Points:</span>
                    <span className="value">{earnPoints || 0}</span>
                    <span className="label">Result:</span>
                    <span className="value" style={{ color: passed ? '#2aff95' : '#ff2a66' }}>
                        {passed ? 'Passed' : 'Failed'}
                    </span>
                </div>

                {/* Correct Answers */}
                <div className="correct-answers">
                    <h2>Correct Answers</h2>
                    {queue.map((question, index) => (
                        <div key={index} className="answer">
                            <strong>Q{index + 1}:</strong> {question.question} <br />
                            <strong>Answer:</strong> {question.options[answers[index]]}
                        </div>
                    ))}
                </div>
            </div>

            <div className="start">
                <Link className="btn" to="/">Restart Quiz</Link>
            </div>
        </div>
    );
}
