import React from 'react';
import './Job.css'
function Job() {

  const job = {
    imagePath: '/img/spotify.png',
    compagnyName: 'Spotify',
    profTitle: 'Senior UX/UI Designer',
    salaryRange: {
      start: '100000',
      end: '120000',
    },
    rating: '4.4',
    location: 'New York, NY, USA',
    type: 'Full-time',
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-avatar'>
          <span className='avatar-circle'>
            <img src={job.imagePath} alt='' />
          </span>

          <span className='compagny-name'> {job.compagnyName}</span>
        </div>
        <div className='card-rating'>
          <span> start </span>
          <span> share </span>
          <span> {job.rating} </span>
        </div>
      </div>
      <div className='card-body'>
        <div className='prof-title'> {job.profTitle}</div>
        <div className='salary'> ${job.salaryRange.start} - ${job.salaryRange.end} </div>
      </div>
      <div className='card-footer'>
        <div className='location'>{job.location}</div>
        <div className='type-job'> {job.type}</div> 
      </div>
    </div>
  )
}

export default Job;