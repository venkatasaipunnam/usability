import axios from 'axios';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Profile from '../../images/profile.svg';
import './UserDetails.css';

function UserDetails() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout', {});
      setCurrentUser({});
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-details-component">
      {currentUser.username
        ? (
          <div>
            {(currentUser.access === 'associate' || currentUser.access === 'Customer' || currentUser.access === 'Admin' || currentUser.access === 'Supervisor')
              ? <Link to="/orders">Orders</Link>
              : null}
            <Link to="/user">
              <img src={Profile} alt="profile" />
              <p>{currentUser.firstname}</p>
            </Link>
            <button type="button" onClick={logout}>
              Log Out
            </button>
          </div>
        ) : <Link to="/login">Log In</Link>}
    </div>
  );
}

export default UserDetails;
