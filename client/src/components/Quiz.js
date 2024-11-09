import React, { useEffect } from 'react'
import Questions from './Questions'
import {MoveNextQuestion, MovePrevQuestion} from '../hooks/FetchQuestion';

//redux store import
import {useSelector, useDispatch} from 'react-redux'


export default function Quiz() {

    // const trace =useSelector(state=>state.questions.trace)
    const {queue,trace}=useSelector(state=>state.questions);
const dispatch=useDispatch()

    useEffect(()=>{
        console.log(trace)
    })

    //next btn event handler
    function onNext(){
        console.log('On next click')
        if(trace<queue.length){
            dispatch(MoveNextQuestion());
        }
        //update trace value by 1 using move next action
       
    }
    function onPrev(){
        console.log('On prev click')
        if(trace>0){
        
        dispatch(MovePrevQuestion());
        }
    }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz App</h1>
  <Questions></Questions>

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Previous</button>
            <button className='btn next' onClick={onNext}>Next</button>

        </div>

    </div>
  )
}
