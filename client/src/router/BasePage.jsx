
import React, {Suspense} from 'react'
import Dashboard from '../Shared/Layout/Dashboard';
import TopNavbar from '../Shared/Layout/TopNavbar';

import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
  } from "react-router-dom";

export default function basePage() {
    return (
        <Router>
        {/* topNavigation */}
        <div>
            <TopNavbar />
        </div>    

        {/* body */}
        <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/jubayer" component={()=> <h2>Jubayer Page</h2>} />
                <Route path="/error" component={() => <h1>Error 404!</h1>} />
                <Redirect to="/error" />
              </Switch>
            </Suspense>
        </div>
      </Router>
    )
}
