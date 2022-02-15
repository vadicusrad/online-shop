import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div className='About'>
      <h2>About this app</h2>
      <p>This is online-store.</p>
      <p>In this project I used JSX, JavaScript and React.</p>
      <p>
        You can use category filter, information about item in modal window, put
        items in cart, and other basic cart functions.
      </p>
      <p>In this app I used free API by https://fakestoreapi.com.</p>
      <p> In plans add sign up function.</p>
      <button className='Cart-backButton' onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default About;
