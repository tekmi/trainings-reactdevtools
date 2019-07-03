import React from 'react';
import PropTypes from 'prop-types';


const Note = ({title}) => (
  <li className='notes__list__item' role="button">
    <div className="notes__list__item__title">
      {title}
    </div>
  </li>
);

Note.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Note;
