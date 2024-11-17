/* eslint-disable */
import axios from 'axios';
import {
  useEffect, useMemo, useReducer, useState,
} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import DetailItem from './components/DetailItem';
import Cart from './components/cart/Cart';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import AllDepartments from './components/AllDepartments';
import NotFound from './components/NotFound';
import { cartReducer, CartTypes, initialCartState } from './reducers/cartReducer';
import CurrentUserContext from './contexts/CurrentUserContext';
import Login from './components/login/Login';
import Orders from './components/orders/Orders';
import Signup from './components/signup/Signup';
import UserDetailsPage from './components/profile/UserDetailsPage';
import Navigation from './components/navigation/Navigation';
import Department from './components/products/Department';
import Categories from './components/products/Categories';
import ToastContainer from './components/notifications/ToastContainer';

const storageKey = 'cart';

function App() {
  const [departements, setDepartements] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    (initialState) => {
      try {
        const storedCart = JSON.parse(localStorage.getItem(storageKey));
        return storedCart || initialState;
      } catch (error) {
        console.log('Error parsing cart', error);
        return initialState;
      }
    },
  );
  const addToCart = (itemId) => dispatch({ type: CartTypes.ADD, itemId });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    axios.get('/api/items/departements')
      .then((result) => setDepartements(result.data))
      .catch(console.error);
  }, []);
  useEffect(() => {
    axios.get('/api/items/categories')
      .then((result) => setCategories(result.data))
      .catch(console.error);
    console.log(categories)
  }, []);
  useEffect(() => {
    axios.get('/api/items/products')
      .then((result) => setProducts(result.data))
      .catch(console.error);
    console.log(products)
  }, []);

  useEffect(() => {
    axios.get('/api/auth/current-user')
      .then((result) => setCurrentUser(result.data))
      .catch(console.error);
  }, []);

  const currentUserContextValue = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser],
  );

  return (
    <Router>
      <CurrentUserContext.Provider
        value={currentUserContextValue}
      >
        <Header cart={cart} />
        <Navigation />
        {(departements.length === 0 || categories.length === 0 || products.length === 0)
          ? <div>Loading...</div>
          : (
            <Routes>
              <Route
                path="/cart"
                element={<Cart cart={cart} dispatch={dispatch} items={products} />}
              />
              <Route path="/department" element={<AllDepartments items={departements}/>}/>
              <Route path="/department/:id" element={<Department items={categories} dept={departements}/>} />
              <Route path="/department/category/:id" element={<Categories items={products} dept={departements} categ={categories}/>} />
              <Route path="/department/category/product" element={<Details items={products} dept={departements} categ={categories}/>} >
                <Route path=':id' element={<DetailItem items={products} addToCart={addToCart}/>} />
                <Route index element={<div>No Item Selected</div>} />
              </Route>
              <Route path="/" element={<Home items={products} />} />
              <Route path="/user" element={<UserDetailsPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/orders" element={<Orders items={products} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
      </CurrentUserContext.Provider>
      <ToastContainer />
    </Router>
  );
}

export default App;
