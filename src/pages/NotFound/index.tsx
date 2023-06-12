import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
      <Link to="/home">Go Home</Link>
    </div>
  );
};

export default NotFound;
