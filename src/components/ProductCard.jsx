import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';


const ProductCard = ({ plant }) => {
const dispatch = useDispatch();
const items = useSelector(state => state.cart.items);
const inCart = items.find(i => i.id === plant.id);


return (
<div className="product-card">
<img src={plant.image} alt={plant.name} />
<h3>{plant.name}</h3>
<p>${plant.price}</p>
<button disabled={!!inCart} onClick={() => dispatch(addToCart(plant))}>
{inCart ? 'Added' : 'Add to Cart'}
</button>
</div>
);
};


export default ProductCard;