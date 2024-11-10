/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-purple-50 p-6 rounded-lg transition-all hover:shadow-md">
      <div className="flex flex-col items-center text-center">
        {icon && <div className="mb-4 text-purple-600">{icon}</div>}
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element
};

Card.defaultProps = {
  icon: null
};

export default Card;