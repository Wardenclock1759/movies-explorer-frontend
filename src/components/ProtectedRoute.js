import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.userLoaded && !props.loggedIn) {
      navigate('/', {replace: true});
    }
  }, [props.loggedIn, props.userLoaded, navigate])

  return (
    props.loggedIn && <Component {...props}/>
)};

export default ProtectedRoute;