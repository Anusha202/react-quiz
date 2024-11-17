import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'  // Import useNavigate hook
import '../styles/main.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'

export default function Main() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const [error, setError] = useState('') // State to hold error message
    const navigate = useNavigate() // Hook for programmatic navigation

    function startQuiz(e) {
        e.preventDefault()  // Prevent the default behavior of <Link /> or form submission

        const username = inputRef.current?.value
        if (!username) {
            setError('Please enter your username to start the quiz.') // Show error if empty
        } else {
            setError('') // Clear error message
            dispatch(setUserId(username)) // Dispatch username to Redux store
            navigate('/quiz') // Navigate to the quiz page
        }
    }

    return (
        <div className='container'>
            {/* Logo Section */}
            <div className="logo-container">
                <img src="/quizz.avif" alt="MERN Quiz Logo" className="logo" />
            </div>

            <h1 className='title text-light'>
                Mern Quiz
            </h1>

            <ol>
                <li>1. Five questions will be asked one after another.</li>
                <li>2. Ten points are awarded for each correct answer.</li>
                <li>3. Three options are provided and you can choose only one option.</li>
                <li>4. One minute is allocated to attempt all the five questions</li>
                <li>5. The result as well as correct answers will be declared at the end</li>
            </ol>

            <form id="form" onSubmit={startQuiz}>  {/* Handle form submission */}
                <input ref={inputRef} type='text' placeholder='Enter your username' />
            </form>

            {/* Display error message if username is empty */}
            {error && <div className="error-message">{error}</div>}

            <div className='start'>
                <button className='btn' onClick={startQuiz}>Start</button> {/* Use button instead of Link */}
            </div>
        </div>
    )
}
