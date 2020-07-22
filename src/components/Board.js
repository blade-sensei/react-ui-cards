import React, { useState } from 'react';
import './Board.css';
import CardOfDay from './cards/CardOfDay';
import JobApplication from './cards/JobApplication'

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
          sal
        </div>
        <div className='single-card'>
          sal
        </div>
        <div className='single-card'> </div>
        <div className='single-card'> </div>
      </div>
      <div className='cards-profiles'>
        <div className='profile'>

        </div>
        <div className='profile'>
          
        </div>
        <div className='profile'>
          
        </div>
        <div className='profile'>
          
        </div>
      </div>

    </div>
  )
}

export default Board