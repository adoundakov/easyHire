import React from 'react';
import { hashHistory, Link } from 'react-router';
import CompanyOverview from '../companies/detail/company_overview';
import Scrollchor from 'react-scrollchor';

class PostingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.savePosting = props.savePosting.bind(this);
    this.unSavePosting = props.unSavePosting.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.openModal = props.openModal.bind(this);
    this.nl2br = this.nl2br.bind(this);
  }

  handleSave(e) {
    e.preventDefault();
    if (this.props.currentUser !== null) {
      if (this.props.posting.isSaved) {
        this.unSavePosting(this.props.posting.id);
      } else {
        this.savePosting(this.props.posting.id);
      }
    } else {
      this.openModal();
    }
  }

  handleApply(e) {
    e.preventDefault();
    if (this.props.currentUser !== null) {
      hashHistory.push('/apply');
    } else {
      this.openModal();
    }
  }

  nl2br(input) {
    return input.split(/\\n/).map((line, idx) => (
      <li key={idx}>{line}</li>
    ));
  }

  render() {
    let posting = this.props.posting;
    let company = posting.company;
    this.blurOverlay = '';
    let applyLink;
    let savedClass;
    let savedText;

    if (this.props.currentUser !== null && posting.isSaved) {
      savedClass = 'unsave';
      savedText = 'Saved';
    } else {
      savedClass = 'save';
      savedText = 'Save';
    }

    if (posting.id === -1) {
      this.containerClass = 'posting-detail-container blur cf';
      this.blurOverlay = <div className='blur-container cf'>
                            <div className='blur-overlay'>
                              <h3>Click a Job To View Here</h3>
                              <div>Scroll through the jobs on the left and click to view the job description in this area</div>
                            </div>
                          </div>;
    } else {
      this.containerClass = 'posting-detail-container cf';
    }

    if (this.props.currentUser !== null && posting.isApplied) {
      applyLink = <a className='apply disabled'>Applied</a>;
    } else {
      applyLink = <a className='apply' onClick={this.handleApply}>
                    Apply on easyHire
                  </a>;
    }

    return (
      <div>
        {this.blurOverlay}
        <div className={this.containerClass} style={{width: this.props.width}}>
          <div className='detail-header cf'>
            <div className='cover-window cf'></div>
            <div className='detail-info cf'>
              <div className='logo-container'>
                <img src={company.logo_url} alt={company.name}></img>
              </div>
              <div className='info'>
                <h3>{posting.title}</h3>
                <div className='job-info'>
                  <div className='info-left'><Link to={`/company/${company.id}`}>{company.name}</Link> | {company.location}</div>
                  <div className='info-right'>{posting.age} ago</div>
                </div>
              </div>
            </div>
            <div className='anchor-nav'>
              <div className='nav'>
                <Scrollchor to='#description'>Description</Scrollchor>
                <Scrollchor to='#overview'>Company</Scrollchor>
              </div>
              <div className='anchor'>
                {applyLink}
                <a className={savedClass}
                   onClick={this.handleSave}>{savedText}</a>
              </div>
            </div>
          </div>
          <div className='detail-content'>
            <div id='description' className='description'>
              <strong>Job Requirements:</strong>
              <ul>{this.nl2br(posting.description)}</ul>
            </div>
            <CompanyOverview company={company} width={'100%'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PostingDetail;
