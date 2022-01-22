import React from 'react';
import './User.css';

const User = (props) => {
  return <div className='User'>
    <React.Fragment>
      <h1> Name:{props.element.name}</h1>
      <h3>Age:{props.element.age}</h3>
      <span>Work:{props.element.work}</span>
    </React.Fragment>
  </div>;
};

export default User;
