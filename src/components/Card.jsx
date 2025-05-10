import React from 'react';

const Card = ({ title, description, children }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-2xl flex-1">
      <h3 className="text-black font-bold mb-2">{title}</h3>
      {description && <p className='text-black text-opacity-50'>{description}</p>}
      {children}
    </div>
  );
};

export default Card;

