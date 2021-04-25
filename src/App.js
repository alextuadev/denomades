import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DataProvider } from './context/DataProvider';

import Cart from './pages/cart';
import ActivityPage from './pages/activity';



function App() {
  return (
    <Router>
      <div>
        <DataProvider>
          <div className="container">
            <div className="row">
              <div className="col">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Actividades</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">Carrito</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="/">
                <ActivityPage />
              </Route>

            </Switch>
          </div>

        </DataProvider>
      </div>
    </Router>
  );
}

export default App;
