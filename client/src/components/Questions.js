import React, { useState } from 'react'
// import '../styles/quiz.css'
export default function Questions() {

    const [checked,setChecked]=useState(undefined)

    function onselect(){
        // setChecked(true)
        console.log('radio button change')
    }
  return (
    <div className='questions'>
        <h2 className='text-light'>Question 1</h2>
        <ul>
            <li>
                <input type='radio' value={true}
                name='options' id='q1-option'
                onChange={onselect()}
                />
               
                <label className='text-primary' htmlFor='g1-option'>Options</label>
                <div className='check cheked'></div>
            </li>
        </ul>

    </div>
  )
}
