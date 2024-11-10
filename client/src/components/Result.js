import React from 'react'
import '../styles/Result.css';
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable';
import { resetAllAction } from '../redux/question_reducer';
import { useDispatch } from 'react-redux';
import { resetResultAction } from '../redux/result_reducer';
export default function Result() {

  const dispatch=useDispatch()
  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  function onRestart(){
    console.log('on Restart')
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz App</h1>
<div className='result flex-center'>
<div className='flex'>
  <span>Username</span>
  <span className='bold'>Daily Tuition</span>

</div>

<div className='flex'>
  <span>Total Points</span>
  <span className='bold'>50</span>

</div>

<div className='flex'>
  <span>Total Questions</span>
  <span className='bold'>5</span>

</div>

<div className='flex'>
  <span>Total Earned Points</span>
  <span className='bold'>30</span>

</div>

<div className='flex'>
  <span>Result</span>
  <span className='bold'>Passed</span>

</div>
</div>

<div className='start'>
  <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>

</div>

<div className='containers'>
<ResultTable></ResultTable>
</div>
    </div>
  )
}
