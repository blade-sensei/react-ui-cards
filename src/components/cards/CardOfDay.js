import React from 'react';
import './CardOfDay.css'
function CardOfDay() {

  const jobOfDay = {
    imagePath: '/img/spotify.png',
    compagnyName: 'Spotify',
    profTitle: 'Senior UX/UI Designer',
    salaryRange: {
      start: '100000',
      end: '120000',
    },
    rating: '4.4',
    location: 'New York, NY, USA'
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-avatar'> 
          <span className='avatar-circle'>
            <img src={jobOfDay.imagePath} alt=''/>
          </span>
          
          <span className='compagny-name'> {jobOfDay.compagnyName}</span>
        </div>
        <div className='card-rating'>
          <span> {jobOfDay.rating} </span>
        </div>
      </div>
      <div className='card-body'>
        <div className='prof-title'> {jobOfDay.profTitle}</div>
  <div className='salary'> ${jobOfDay.salaryRange.start} - ${jobOfDay.salaryRange.end} </div>
        <div className='location'>{jobOfDay.location}</div>
      </div>
    </div>
  )
}

export default CardOfDay;