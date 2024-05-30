// Import PropTypes
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom'; // Import the 'Route' component

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('authToken');

    return isAuthenticated ? (
        <Route {...rest} element={<Element />} />
    ) : (
        <Navigate to="/admin/login" replace />
    );
};

// Add prop types validation
ProtectedRoute.propTypes = {
    element: PropTypes.elementType.isRequired, // Validate the element prop
 
};

export default ProtectedRoute;
