import React from 'react';
import Layout from '../components/layouts/layouts';
import { Link } from 'react-router-dom';
import Banner from '../Images/banner.jpeg';
import '../styles/homeStyle.css';
import Menu from './menu';

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>
            Our First Food<br /> Order Website
          </h1>
          <p>Best & Fresh Fastfood in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
      <Menu />
    </Layout>
  );
};

export default Home;
