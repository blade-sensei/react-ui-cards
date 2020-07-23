import React from 'react';
import './Profile.css';

function Profile() {

  const profile = {
    avatar: '/img/40.png',
    name: 'Matilda Maldonado',
    profTitle: 'Project Manager',
    experience: 'Experience 5 years 9 month',
    location: 'New York, NY, USA',
  }
  return (
    <div className='profile-card'>
      <div className='card-header'>
        <div className='card-avatar'>
          <img src={profile.avatar} alt='' />
          <span> {profile.name} </span>
        </div>
        <div className='card-rating'>
          <div className='icon-star'>
            <img src='/img/star.png' alt='' />
          </div>
          <div className='icon-bookmark'>
            <img src='/img/bookmark.png' alt='' />
          </div>
        </div>
      </div>
      <div className='card-body'>
        <div className='labels'>
        <label> Last Job </label>
        <label> Exp. </label>
        <label> Rate </label>
        </div>
        <div className='values'>
          
          <span> Google </span>
          <span> 5 years 9 month  </span>
          <span> $50/hour </span>
        </div>
      </div>
    </div>
  )
}

export default Profile;