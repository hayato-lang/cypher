import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HomeShow } from "./HomeShow";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route
        path="/home"
        render={({match: { url }}) => (
          <Switch>
            {HomeShow.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404/>
      </Route>
    </Switch>
  );
};