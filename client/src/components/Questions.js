import React, { useEffect, useState } from 'react'

// import '../styles/quiz.css'
import {useSelector} from 'react-redux'

//custom hook
import { useFetchQuestion } from '../hooks/FetchQuestion'


export default function Questions() {

    const [checked,setChecked]=useState(undefined)
   const [{isLoading,apiData,serverError}]= useFetchQuestion()


const questions=useSelector(state=>state.questions.queue[state.questions.trace])
const trace=useSelector(state=>state.questions.trace)

    useEffect(()=>{
        // console.log(isLoading)
        // console.log(apiData)
        // console.log(serverError)
        console.log(questions)
        // console.log(questions.queue[0])//access only one question by putting 0
    })

    function onselect(){
        // setChecked(true)
        // console.log('radio button change')
    }

    if(isLoading) return <h3 className='text-light'> isLoading</h3>
    if(serverError) return <h3 className='text-light'> [serverError || "Unknown Error"]</h3>

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>
        
        <ul key={questions?.id}>
        {
            questions?.options.map((q,i)=>(
                <li key={i}>
                <input type='radio' value={false}
                name='options' id={`q${i}-option`}
                onChange={onselect()}
                />
               
                <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                <div className='check '></div>
            </li>
            ))
        }
        </ul>

    </div>
  )
}
