import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Earned Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Daily Tuition</td>
                    <td>30</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
