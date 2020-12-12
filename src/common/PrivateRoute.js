import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<Route
      render={props =>
        this.props.authenticated ? (
          <this.props.component {...this.props.rest} {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
      }
    />)
  }
}

export default PrivateRoute