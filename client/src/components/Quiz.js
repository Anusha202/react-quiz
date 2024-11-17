import React, { useEffect, useState } from 'react';
import Questions from './Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';
/** redux store import */
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Quiz() {
    const [check, setChecked] = useState(undefined);
    const [timeLeft, setTimeLeft] = useState(60); // 1 minute in seconds
    const [redirect, setRedirect] = useState(false); // Track if navigation should happen
    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    /** Timer countdown */
    useEffect(() => {
        if (timeLeft === 0) {
            // Trigger redirect state when time is up
            setTimeout(() => setRedirect(true), 2000); // 2-second delay for the message
        } else {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup the interval on unmount
        }
    }, [timeLeft]);

    /** Next button event handler */
    function onNext() {
        if (trace < queue.length) {
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());
            /** insert a new result in the array. */
            if (result.length <= trace) {
                dispatch(PushAnswer(check));
            }
        }
        /** reset the value of the checked variable */
        setChecked(undefined);
    }

    /** Prev button event handler */
    function onPrev() {
        if (trace > 0) {
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    }

    function onChecked(check) {
        setChecked(check);
    }

    /** finished exam after the last question */
    if (redirect || (result.length && result.length >= queue.length)) {
        return <Navigate to={'/result'} replace={true}></Navigate>;
    }

    /** Format time as mm:ss */
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='container'>
            <h1 className='title text-light'>MERN Quiz</h1>

            {/* Timer display */}
            <div className='timer text-light'>
                Time Left: <span>{formatTime(timeLeft)}</span>
            </div>

            {/* Time finished message */}
            {timeLeft === 0 && (
                <div className='time-finished text-light'>
                    Time Finished!
                </div>
            )}

            {/* Display questions */}
            <Questions onChecked={onChecked} />
            <div className='grid'>
                {trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    );
}
