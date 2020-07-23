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
        <div className='card-avatar-job'>
          <span className='avatar-circle'>
            <img src={job.imagePath} alt='' />
          </span>

          <span className='compagny-name'> {job.compagnyName}</span>
        </div>
        <div className='card-rating'>
          <div className='icon-star'> 
            <img  src='/img/star.png' alt=''/>
          </div>
          <div className='icon-bookmark'>
            <img src='/img/bookmark.png' alt=''/>
          </div>
          <div className='rating'> 
            <span className='value'> {job.rating} </span>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <div className='prof-title'> {job.profTitle}</div>
        <div className='salary'> ${job.salaryRange.start} - ${job.salaryRange.end} </div>
      </div>
      <div className='card-footer'>
        <div className='location'>{job.location}</div>
        <span className='type-job'> {job.type}</span> 
      </div>
    </div>
  )
}

export default Job;