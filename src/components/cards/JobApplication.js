import React from 'react';
import './JobApplication.css';

function JobApplication() {
  return (
    <div className='job-card'>
      <div className='card-header'>
        <div className='card-avatar'> 
          <img src='' alt=''/>
          <span> title spotify</span>
        </div>
      </div>
      <div className='card-body'>
        <div className='prof-title'> manager </div>
        <div className='experience'> 12</div>
        <div className='location'>location</div>
      </div>
    </div>
  )
}

export default JobApplication;