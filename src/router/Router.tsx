import { Route, Switch } from "react-router-dom";
import { Login } from "../components/pages/Login";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login/>
      </Route>
    </Switch>
  );
};