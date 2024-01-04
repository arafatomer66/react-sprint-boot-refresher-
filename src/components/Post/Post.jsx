// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';

import classes from './Post.module.css';


// const names = ["Md Omer Arafat", "Sumaya Tayeba"];
// Always upper case char
export default function Post(props) {
//   const name = Math.random() > .5 ? names[0]: names[1];

  return (
    <div className={classes.post}>
        <p className={classes.author}>{ props?.author }</p>
        <p className={classes.text}>{ props?.body }</p>
    </div>
  )
}

Post.propTypes = {
  author: PropTypes.string.isRequired, // or any other valid type
  body: PropTypes.string.isRequired, // or any other valid type
};
