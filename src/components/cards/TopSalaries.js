import React from 'react';
import './TopSalaries.css';
function TopSalaries() {
  const salary = {
    graph: '/img/graph.png',
    title: 'Psychiatrist',
    value: '$154,710',
    reported: '7,459 salaries reported',
  }
  return (
    <div className='salary-card'>
      <div className='card-header'>
        <div className='card-graph'> 
          <img src={salary.graph} alt=''/>
        </div>
      </div>
      <div className='card-body'>
        <div className='title'> {salary.title} </div>
        <div className='salary'> {salary.value}</div>
        <div className='information'>{salary.reported}</div>
      </div>
    </div>
  )
}

export default TopSalaries