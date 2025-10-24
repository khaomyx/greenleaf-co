import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


const CartPage = () => {
const items = useSelector(state => state.cart.items);
const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);


return (
<div>
<Header />
<div className="cart-page">
<h2>Shopping Cart</h2>
<p>Total plants: {totalItems}</p>
<p>Total cost: ${totalPrice.toFixed(2)}</p>
<div>
{items.map(item => <CartItem key={item.id} item={item} />)}
</div>
    <div className="cart-actions">
        <button onClick={() => alert('Your plant is on their way to you. Thanks for shopping!')}>Checkout</button>
        <Link to="/products" className="btn">Continue Shopping</Link>
    </div>
</div>
</div>
);
};


export default CartPage;