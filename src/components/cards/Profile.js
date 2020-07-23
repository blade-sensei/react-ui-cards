import React from 'react';

function Profile() {

  const profile = {
    avatar: '/img/40.png',
    name: 'Matilda Maldonado',
    profTitle: 'Project Manager',
    experience: 'Experience 5 years 9 month',
    location: 'New York, NY, USA',
  }
  return (
    <div className='job-card'>
      <div className='card-header'>
        <div className='card-avatar'> 
          <img src={profile.avatar} alt=''/>
          <span> {profile.name} </span>
        </div>
      </div>
      <div className='card-body'>
        <div className='prof-title'> {profile.profTitle} </div>
        <div className='experience'> {profile.experience}</div>
        <div className='location'>{profile.location}</div>
      </div>
    </div>
  )
}

export default Profile;