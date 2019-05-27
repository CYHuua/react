import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
// import { addToCart } from './store/actions/cart-actions';

console.log('initial state：', store.getState())

// let unsubscribe = store.subscribe(() => 
// 	console.log(store.getState())
// );

// store.dispatch(addToCart('mantou', 1, 250));
// store.dispatch(addToCart('zishu', 2, 110));
// store.dispatch(addToCart('baozi', 1, 250));

// unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);

// const App = <h1>Redux Shopping Cart</h1>;
// ReactDOM.render(
//   <Provider store={store}>
//     { App }
//   </Provider> ,
//   document.getElementById('root')
// );
