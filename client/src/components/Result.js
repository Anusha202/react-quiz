import React, { useEffect } from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';
import { resetAllAction } from '../redux/question_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { resetResultAction } from '../redux/result_reducer';
export default function Result() {

  const dispatch = useDispatch()

  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state)
  useEffect(() => {
    console.log(flag)
  })

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result)

  const earnPoints = earnPoints_Number(result, answers, 10)
  const flag=flagResult(totalPoints,earnPoints)

  function onRestart() {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
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
          <span className='bold'>{totalPoints || 0}</span>

        </div>

        <div className='flex'>
          <span>Total Questions</span>
          <span className='bold'>{queue.length}</span>

        </div>

        <div className='flex'>
          <span>Total Attempts</span>
          <span className='bold'>{attempts || 0}</span>

        </div>

        <div className='flex'>
          <span>Total Earned Points</span>
          <span className='bold'>{earnPoints || 0}</span>

        </div>

        <div className='flex'>
          <span>Result</span>
          <span className='bold'>{flag ? "Passed":"Failed"}</span>

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




// import React, { useEffect } from 'react';
// import '../styles/Result.css';
// import { Link } from 'react-router-dom';
// import ResultTable from './ResultTable';
// import { attempts_Number, earnPoints_Number } from '../helper/helper';
// import { resetAllAction } from '../redux/question_reducer';
// import { useDispatch, useSelector } from 'react-redux';
// import { resetResultAction } from '../redux/result_reducer';

// export default function Result() {
//   const dispatch = useDispatch();
//   const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

//   const totalPoints = queue.length * 10;
//   const attempts = attempts_Number(result);
//   const earnPoints = earnPoints_Number(result, answers);

//   // Log earnPoints when it changes
//   useEffect(() => {
//     console.log(earnPoints);
//   }, [earnPoints]);

//   function onRestart() {
//     dispatch(resetAllAction());
//     dispatch(resetResultAction());
//   }

//   return (
//     <div className='container'>
//       <h1 className='title text-light'>Quiz App</h1>
//       <div className='result flex-center'>
//         <div className='flex'>
//           <span>Username</span>
//           <span className='bold'>{userId || 'Unknown'}</span> {/* Display user ID */}
//         </div>

//         <div className='flex'>
//           <span>Total Points</span>
//           <span className='bold'>{totalPoints}</span> {/* Dynamically render total points */}
//         </div>

//         <div className='flex'>
//           <span>Total Questions</span>
//           <span className='bold'>{queue.length}</span> {/* Dynamically render total questions */}
//         </div>

//         <div className='flex'>
//           <span>Total Earned Points</span>
//           <span className='bold'>{earnPoints}</span> {/* Dynamically render earned points */}
//         </div>

//         <div className='flex'>
//           <span>Result</span>
//           <span className='bold'>{earnPoints >= totalPoints / 2 ? 'Passed' : 'Failed'}</span> {/* Dynamically determine pass/fail */}
//         </div>
//       </div>

//       <div className='start'>
//         <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
//       </div>

//       <div className='containers'>
//         <ResultTable />
//       </div>
//     </div>
//   );
// }
