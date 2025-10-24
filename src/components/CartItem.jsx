import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem } from '../redux/cartSlice';


const CartItem = ({ item }) => {
const dispatch = useDispatch();


return (
<div className="cart-item">
<img src={item.image} alt={item.name} />
<div>
<h4>{item.name}</h4>
<p>${item.price} each</p>
<div className="controls">
<button onClick={() => dispatch(decrease(item.id))}>-</button>
<span>{item.quantity}</span>
<button onClick={() => dispatch(increase(item.id))}>+</button>
</div> <br></br>
<button className="delete" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
</div>
</div>
);
};


export default CartItem;