import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';

export default function Main() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function startQuiz(e) {
        e.preventDefault();

        const username = inputRef.current?.value;
        if (!username) {
            setError('⚠️ Please enter your username to start the quiz.');
        } else {
            setError('');
            dispatch(setUserId(username));
            navigate('/quiz');
        }
    }

    return (
        <div className="container">
            {/* Logo Section */}
            <div className="logo-container">
                <img src="/quizz.avif" alt="MERN Quiz Logo" className="logo" />
            </div>

            <h1 className="title text-light">MERN Quiz</h1>

            <div className="instructions">
                <p>Get ready to challenge yourself!</p>
                <ol>
                    <li>1. 5 questions will appear one by one.</li>
                    <li>2. Earn 10 points for each correct answer.</li>
                    <li>3. Select only one option for each question.</li>
                    <li>4. Complete all questions within 1 minute.</li>
                    <li>5. Your results will be displayed at the end.</li>
                </ol>
            </div>

            <form id="form" onSubmit={startQuiz}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter your username"
                    aria-label="Username"
                />
            </form>

            {/* Error Message */}
            {error && (
    <div className="error-container">
        <div className="error-message">{error}</div>
    </div>
)}

            <div className="start">
                <button className="btn" onClick={startQuiz}>🚀 Start Quiz</button>
            </div>
        </div>
    );
}
