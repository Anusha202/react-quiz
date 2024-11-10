import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import {MoveNextQuestion, MovePrevQuestion} from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';
//redux store import
import {useSelector, useDispatch} from 'react-redux'


export default function Quiz() {
    const [check,setChecked]=useState(undefined)

    const state=useSelector(state=>state);
    // const trace =useSelector(state=>state.questions.trace)
    const {queue,trace}=useSelector(state=>state.questions);
const dispatch=useDispatch()

    useEffect(()=>{
        console.log(state)
    })

    //next btn event handler
    function onNext(){
        console.log('On next click')
        if(trace<queue.length){
            dispatch(MoveNextQuestion());
            dispatch(PushAnswer(check))
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
