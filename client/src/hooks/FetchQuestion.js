import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

/** Redux actions */
import * as Action from '../redux/question_reducer';

/** Fetch question hook to fetch API data and set value to store */
export const useFetchQuestion = () => { // Fixed typo here
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({
        isLoading: false, 
        apiData: [], 
        serverError: null
    });

    useEffect(() => {
        // Start loading
        setGetData(prev => ({ ...prev, isLoading: true }));

        /** Async function to fetch backend data */
        (async () => {
            try {

                console.log(process.env.REACT_APP_SERVER_HOSTNAME);
                // Fetch questions and answers from server
                const [{ questions, answers }] = await getServerData(
                    `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,
                    (data) => data
                );

                // Check if questions exist
                if (questions.length > 0) {
                    // Update state with data
                    setGetData(prev => ({
                        ...prev, 
                        isLoading: false, 
                        apiData: questions
                    }));

                    /** Dispatch an action to store questions and answers in Redux */
                    dispatch(Action.startExamAction({ question: questions, answers }));
                } else {
                    throw new Error("No questions available");
                }
            } catch (error) {
                // Set error state
                setGetData(prev => ({
                    ...prev,
                    isLoading: false,
                    serverError: error.message || error // Ensure error is a string
                }));
            }
        })();
    }, [dispatch]); // Ensure this effect runs only once

    return [getData, setGetData];
};

/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** Increase trace by 1 */
    } catch (error) {
        console.log(error);
    }
};

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** Decrease trace by 1 */
    } catch (error) {
        console.log(error);
    }
};
