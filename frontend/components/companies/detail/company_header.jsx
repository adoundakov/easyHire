import React from 'react';
import Scrollchor from 'react-scrollchor';
import { hashHistory } from 'react-router';
// let company cover use bg images
// <img src={company.cover_url} alt={company.name}/>
const CompanyHeader = ({company, openModal, currentUser}) => {

  let addReview = e => {
    e.preventDefault();
    if (currentUser !== null) {
      hashHistory.push(`reviews/${company.id}/new`);
    } else {
      openModal();
    }
  };

  return (
    <div className='company-header cf'>
      <div className='company-cover cf'>
      </div>
      <div className='info-div'>
        <div className='logo-container'>
          <img src={company.logo_url} alt={company.name}></img>
        </div>
        <h2>{company.name}</h2>
      </div>
      <div className='detail-anchor-nav cf'>
        <div className='company-header-nav'>
          <Scrollchor to='#overview'>
            <div className='company-nav'>
              <div className='nav-icon'>{''}</div>Overview
            </div>
          </Scrollchor>
          <Scrollchor to='#reviews'>
            <div className='company-nav'>
              <text>{company.numReviews}</text>Reviews
            </div>
          </Scrollchor>
          <Scrollchor to='#postings'>
            <div className='company-nav'>
              <text>{company.numPostings}</text>Positions
            </div>
          </Scrollchor>
          <Scrollchor to='#salaries'>
            <div className='company-nav'>
              <text>147</text>Salaries
            </div>
          </Scrollchor>
        </div>
        <div className='header-review'
             onClick={addReview}><a>Add a Review</a></div>
      </div>
    </div>
  );
};

export default CompanyHeader;
