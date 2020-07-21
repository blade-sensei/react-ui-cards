import React, { useState } from 'react';
import './Board.css';
import CardOfDay from './cards/CardOfDay';

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
      <div className='cards-jobapplication'></div>
      <div className='cards-topsalaries'></div>
      <div className='cards-profiles'></div>

    </div>
  )
}

export default Board