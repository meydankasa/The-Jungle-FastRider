import React, {useContext} from 'react'
import { Redirect } from 'react-router';
import { AppContext } from "../context/context";
import { Route } from 'react-router';

export default function ProtectedRoute({Component, ...restOfProps}) {
    const { confirmCode } = useContext(AppContext);
    return (
        <Route
          {...restOfProps}
          render={(props) =>
            confirmCode ? <Component {...props} /> : <Redirect to="/" />
          }
        />
      );
}
