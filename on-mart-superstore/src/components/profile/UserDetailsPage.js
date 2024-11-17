/* eslint-disable */
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Alert from '../Alert';
import './UserDetails.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function UserDetailsPage() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [username, setUsername] = useState(currentUser.username);
    const [password, setPassword] = useState(currentUser.password);
    const [firstname, setFirstName] = useState(currentUser.firstname);
    const [lastname, setLastName] = useState(currentUser.lastname);
    const [email, setEmail] = useState(currentUser.email);
    const [phonenumber, setPhoneNumber] = useState(currentUser.phonenumber);
    const [apiError, setApiError] = useState('');
    const [success, setSuccess] = useState(false);

    const updateUser = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.post('/api/auth/updateuser', {
                username,
                password,
                firstname,
                lastname,
                email,
                phonenumber,
            });
            setSuccess(true);
            console.log(result.data);
            setCurrentUser(result.data?.user);
        } catch (error) {
            console.error(error);
            setApiError(error?.response?.data?.error || 'Unknown Error');
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setApiError('');
            setSuccess(false);
        }, 5000); // Timeout set to 5 seconds (5000 milliseconds)

        return () => clearTimeout(timeout);
    }, [apiError, success]);

    return (
        <div className="user-profile-container">
            <Alert visible={!!apiError} type="error">
                <p>There was an error signing up.</p>
                <p>{apiError}</p>
            </Alert>
            <Alert visible={success} type="success">
                Updated Successfully!
            </Alert>
            <h2>Profile</h2>
            <form onSubmit={updateUser}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstname}
                        autoComplete="firstname"
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        autoComplete="lastname"
                        onChange={(event) => setLastName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        autoComplete="email@email.com"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phonenumber"
                        value={phonenumber}
                        autoComplete="phonenumber"
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        required
                    />
                </div>
                <div className="profile_update_btn">
                    <button className="update_bttn" type="submit">Update</button>
                </div>
            </form>
        </div>
    );
}

export default UserDetailsPage;
