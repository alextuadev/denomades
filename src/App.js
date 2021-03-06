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
import logo from './assets/img/denomades.png'; // Tell webpack this JS file uses this image



function App() {
  return (
    <Router>
      <div>
        <DataProvider>
          <div className="container">
            <div className="row">
              <div className="col">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                      <img className="img-responsive logo" src={logo} />
                    </a>
                    <input type="checkbox" id="navbar-toggle-cbox" />

                    <label for="navbar-toggle-cbox" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="navbar-toggler-icon"></span>
                    </label>







                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">Actividades</Link>
                        </li>
                        <li class="nav-item">
                          <Link className="nav-link" to="/cart">Carrito</Link>
                        </li>

                      </ul>

                    </div>
                  </div>
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
