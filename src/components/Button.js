import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value }) => {
  return (
    <button
      type='button'
      className='
        py-2 px-6 
        bg-yellow-600 
        text-white 
        font-semibold 
        rounded-lg 
        shadow-md 
        hover:bg-yellow-500 
        hover:shadow-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-yellow-400 
        focus:ring-opacity-75
        transition-all 
        duration-300
        w-full
      '
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;