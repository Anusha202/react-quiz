import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import {MoveNextQuestion, MovePrevQuestion} from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';
//redux store import
import {useSelector, useDispatch} from 'react-redux'
import {Navigate} from 'react-router-dom';

export default function Quiz() {
    const [check,setChecked]=useState(undefined)

    const result=useSelector(state=>state.result.result);
    // const trace =useSelector(state=>state.questions.trace)
    const {queue,trace}=useSelector(state=>state.questions);
const dispatch=useDispatch()

    useEffect(()=>{
        console.log(result)
    })

    //next btn event handler
    function onNext(){
        console.log('On next click')
        if(trace<queue.length){
            dispatch(MoveNextQuestion());

            //insert new result in array
            if(result.length<=trace){
            dispatch(PushAnswer(check))
        }
        }
        //update trace value by 1 using move next action
       
    }
    function onPrev(){
        console.log('On prev click')
        if(trace>0){
        
        dispatch(MovePrevQuestion());
        }
    }

function onChecked(check){
    console.log(check)
    setChecked(check)
}

//finished exam after last question
if(result.length && result.length>=queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>
}


  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz App</h1>
  <Questions onChecked={onChecked}/>

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Previous</button>
            <button className='btn next' onClick={onNext}>Next</button>

        </div>

    </div>
  )
}
