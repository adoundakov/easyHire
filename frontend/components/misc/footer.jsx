import React from 'react';
import {Link} from 'react-router';

const Footer = () => (
  <footer>
    <Link className='hr-link' to='/'>Work in HR or Recruiting?</Link>
    <p>easyHire is your free inside look at jobs and companies. Salary details, company reviews, and interview questions — all posted anonymously by employees and job seekers.</p>
    <ul className='footer-list'>
      <a className='git-link' href='http://www.github.com/adoundakov/easyHire'>
        <img src='https://res.cloudinary.com/adoundakov/image/upload/v1478676690/images/github_riwhs5.ico'
             alt='GitHub Link to Project'/>
      </a>
      <a className='linkedIn-link' href='http://www.linkedin.com/in/adoundakov'>
        <img src='https://res.cloudinary.com/adoundakov/image/upload/v1478676689/images/LinkedIn_icon_yihy9d.png'
             alt='LinkedIn Link to Author'/>
      </a>
      <a className='stack-link' href='http://www.stackoverflow.com/story/adoundakov'>
        <img src='https://res.cloudinary.com/adoundakov/image/upload/v1478676689/images/stack_overflow_icon_qtfgk1.png'
             alt='StackOverflow Developer Story'/>
      </a>
    </ul>
  </footer>
);

export default Footer;
