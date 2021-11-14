import PageLoader from "components/loaders/PageLoader";
import { JWT_KEY } from "config";
import React, { useState } from "react";
import { Route, Redirect } from "react-router";
import { ROUTE_ADMIN_LOGIN } from "routes/admin/login";
function AdminRoute({ component: Component, ...rest }) {
  const [authed, setAuthed] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  React.useEffect(() => {

    const jwt = localStorage.getItem(JWT_KEY);
    if (jwt && jwt.length > 0) {
      setAuthed(true);
    } else {
      setAuthed(false);
    }
    setCheckingAuth(false)
  }, []);
  return (
    !checkingAuth ? <Route
    {...rest}
    render={(props) =>
      authed === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: ROUTE_ADMIN_LOGIN,
            state: { from: props.location },
          }}
        />
      )
    }
  /> : (<PageLoader/>)
  );
}
export default AdminRoute;
