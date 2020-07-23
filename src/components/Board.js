import React, { useState } from 'react';
import './Board.css';
import CardOfDay from './cards/CardOfDay';
import JobApplication from './cards/JobApplication'
import TopSalaries from './cards/TopSalaries';
import Job from './cards/Job';
import Profile from './cards/Profile';

function Board () {

  // data init

  // function internal

  return (
    <div className='container'>
      <div className='cards-jobday'>
        <div className='card-single'>
          <CardOfDay/>
        </div>
        <div className='card-single'>
          <CardOfDay/>
        </div>
        <div className='card-single'>
          <CardOfDay/>
        </div>
      </div>
      <div className='cards-jobapplication'>
        <div>
          <JobApplication/>
        </div>
        <div>
          <JobApplication/>
        </div>
        <div>
          <JobApplication/>
        </div>
      </div>
      <div className='cards-topsalaries'>
        <div className='single-card'>
          <TopSalaries/>
        </div>
        <div className='single-card'>
          <TopSalaries/>
        </div>
        <div className='single-card'>
          <TopSalaries/>
        </div>
        <div className='single-card'>
          <TopSalaries/>
        </div>
      </div>
      <div className='cards-job-list'>
        <div className='job'>
          <Job/>
        </div>
        <div className='job'>
          <Job/>
        </div>
      </div>
      <div className='cards-profiles'>
       <div className='profile'>
        <Profile/>
       </div>
       <div className='profile'>
        <Profile/>
       </div>
      </div>

    </div>
  )
}

export default Board