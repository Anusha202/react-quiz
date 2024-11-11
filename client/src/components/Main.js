import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'

export default function Main() {
    const inputRef=useRef(null)

    const dispatch=useDispatch()

    function startQuiz(){
      if(inputRef.current?.value){
dispatch(setUserId(inputRef.current?.value))
      }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>
            Quiz App
        </h1>
      <ol>
        <li>10 questions will be asked one after another</li>
        <li>10 points is awarded for each correct answer</li>
        <li>Three options are provided and you can choose only one option</li>
        <li>The result will be declared after you answer all the ten questions</li>
       
      </ol>
      <form id="form">
        <input ref={inputRef} type='text' placeholder='Enter your username'/>
      </form>

      <div className='start'>
        <Link className='btn' to={'quiz'} onClick={startQuiz}>Start</Link>
      </div>

   

    </div>
  )
}
