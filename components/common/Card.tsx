 import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border rounded shadow p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;

