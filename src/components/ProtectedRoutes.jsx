
/*import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
};

export default ProtectedRoutes; */
