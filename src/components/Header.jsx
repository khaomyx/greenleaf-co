import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
const items = useSelector(state => state.cart.items);
const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);


return (
<header className="header">
<h1>GreenLeaf Co.</h1>
<nav>
<Link to="/products">Products</Link>
<Link to="/cart">🛒 {totalCount}</Link>
</nav>
</header>
);
};


export default Header;