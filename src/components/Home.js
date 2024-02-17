import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>Welcome Home
      <div><Link to="/settle" className="btn btn-outline-light">Settle</Link></div>
    </div>
  )
}

export default Home