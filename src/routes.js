import React from "react";
import { Route, Router } from "react-router-dom";
import App from "./components/presentational/App";
import history from "./history";


export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={() => <App />} />
      </div>
    </Router>
  );
};
