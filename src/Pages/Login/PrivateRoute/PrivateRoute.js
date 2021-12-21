import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) { return <CircularProgress color="success" /> }

    if (user.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;