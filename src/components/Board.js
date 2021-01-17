import React from 'react';
import './Board.css';
import CardOfDay from './cards/CardOfDay';
import JobApplication from './cards/JobApplication'
import TopSalaries from './cards/TopSalaries';
import Job from './cards/Job';
import Profile from './cards/Profile';

function Board () {

  const jobs = [
    {
      key:'1',
      imagePath: '/img/spotify.png',
      compagnyName: 'Spotify',
      profTitle: 'Senior UX/UI Designer',
      salaryRange: {
        start: '100000',
        end: '120000',
      },
      rating: '4.4',
      location: 'New York, NY, USA'
    },
    {
      key:'2',
      imagePath: '/img/airbnblogo.png',
      compagnyName: 'Airbnb',
      profTitle: 'Senior UX/UI Designer',
      salaryRange: {
        start: '40.000',
        end: '60.000',
      },
      rating: '4.4',
      location: 'New York, NY, USA'
    },
    {
      key:'3',
      imagePath: '/img/google.png',
      compagnyName: 'Google',
      profTitle: 'Senior UX/UI Designer',
      salaryRange: {
        start: '40.000',
        end: '60.000',
      },
      rating: '4.4',
      location: 'New York, NY, USA'
    },
  ]


  return (
    <div className='container'>
      <div className='cards-jobday'>
        {
          jobs.map((job) => {
            return (
              <div className='card-single' key={job.key}>
                <CardOfDay card={job}/>
              </div>  
            )
          })
        }
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