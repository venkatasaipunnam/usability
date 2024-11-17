/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import { all_departments } from '../../items';

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">OnMart Superstore</Link>
      </div>
      <div className="navbar-menu">
        <ul>
          {all_departments.map((dept) => (
            <li>
              <Link to={"/department/"+dept.url}>{dept.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;