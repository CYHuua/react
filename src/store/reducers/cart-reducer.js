// src/redux/reducers/cart-reducer.js
import { ADD_TO_CART } from '../actions/cart-actions';

const inistialState = {
	cart: [{
		product: 'bread 700g',
		quantity: 2,
		unitCost: 90
	}, {
		product: 'milk 500ml',
		quantity: 1,
		unitCost: 47
	}]
};

export default function(state = inistialState, action) {
	switch(action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cart: [...state.cart, action.payload]
			}
		}
		default: 
			return state;
	}
}
