import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppLogo from '../images/OnMart.jpg';
import CartIcon from '../images/cart.svg';
import UserDetails from './profile/UserDetails';
import './Header.css';

function Header({ cart }) {
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className="header-component">
      <Link to="/">
        <img src={AppLogo} alt="OnMart Superstore" />
        <h1>OnMart Superstore</h1>
      </Link>
      <div className="menu">
        <Link to="/cart">
          <img src={CartIcon} alt="Cart" />
          <div className="badge">{cartQuantity}</div>
        </Link>
        <UserDetails />
      </div>
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default Header;
