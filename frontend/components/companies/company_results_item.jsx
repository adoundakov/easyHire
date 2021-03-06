import React from 'react';
import { hashHistory } from 'react-router';
import ReactStars from 'react-stars';

const CompanyResultItem = ({company, requestOneCompany, openModal, currentUser}) => {

  let handleClick = id => (
    e => {
      e.preventDefault();
      requestOneCompany(id);
      hashHistory.push(`/company/${id}`);
    });

  let goToReviews = id => (
    e => {
      e.preventDefault();
      requestOneCompany(id);
      hashHistory.push(`reviews/${id}`);
    }
  );

  let addReview = id => (
    e => {
      e.preventDefault();
      if (currentUser !== null) {
        requestOneCompany(id);
        hashHistory.push(`reviews/${id}/new`);
      } else {
        openModal();
      }
    }
  );

  return (
    <li className='company-result-item cf'>
      <div className='company-result-header cf'>
        <div className='cover-window cf'></div>
        <div className='detail-info cf'>
          <div className='logo-container'>
            <img src={company.logo_url} alt={company.name}/>
          </div>
          <div className='info cf'>
            <a className='company-name'
                onClick={handleClick(company.id)}>
                {company.name}
            </a>
            <div className='info-left'>{company.location} | {company.company_url}</div>
            <div className='info-right'><a onClick={addReview(company.id)}>Add a Review</a></div>
            <div className='anchor-nav cf'>
              <div className='rating-summary'>
                {company.average_rating}
                <ReactStars count={5}
                            char='&#10026;'
                            value={company.average_rating}
                            color1={'#404040'}
                            color2={'#86B73B'}
                            edit={false}
                            />
              </div>
              <div className='company-nav-block cf'>
                <div className='company-nav'
                     onClick={goToReviews(company.id)}>{company.numReviews}<a>Reviews</a></div>
                <div className='company-nav'
                     onClick={handleClick(company.id)}>{company.numPostings}<a>Positions</a></div>
                <div className='company-nav'
                     onClick={handleClick(company.id)}>147<a>Salaries</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CompanyResultItem;
