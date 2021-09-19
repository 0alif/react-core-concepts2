import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div >
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="product">
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div>
      <h2>name: {props.name}</h2>
      <p>email: {props.email}</p>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  const handelIncrease = () => setCount(count + 1);
  const handelDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handelIncrease}>Increase</button>
      <button onClick={handelDecrease}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '3px solid blue',
    borderRadius: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  );
}



export default App;

/*
  const products = [
    { name: 'mobile', price: 15000 },
    { name: 'camera', price: 55000 },
    { name: 'laptop', price: 150000 },
    { name: 'watch', price: 5000 },
    { name: 'shoe', price: 500 }
  ]
*/

/*
  {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="mobile" price="15000"></Product>
      <Product name="laptop" price="150000"></Product>
      <Product name="camera" price="155000"></Product>
*/
