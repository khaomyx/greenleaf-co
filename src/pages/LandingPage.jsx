import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
return (
<div className="landing" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6)', backgroundSize: 'cover' }}>
<div className="overlay">
<h1>GreenLeaf Co.</h1>
<p>We bring nature to your home with our curated collection of lush, beautiful houseplants. Transform your space into a sanctuary.</p>
<Link to="/products" className="btn">Get Started</Link>
</div>
</div>
);
};


export default LandingPage;