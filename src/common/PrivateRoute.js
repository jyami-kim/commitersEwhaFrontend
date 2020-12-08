import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
  
  
  console.log("privateRoute")
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
);
  
export default PrivateRoute