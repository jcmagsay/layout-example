import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import classNames from 'classnames';
import routes from 'routes/routes';
import Nav from 'layout/nav/nav';
// Services
import GithubService from 'services/github-service';

export default class Main extends React.Component {
  constructor() {
    super();

    this.initializeServices();
  }

  initializeServices() {
    this.githubService = new GithubService();
  }

  render() {
    return (
      <Router>
        <div>
          <header role="banner">
            <Nav />
          </header>
          <main id="main" role="main">
            <Switch>
              {routes.map((route, i) =>
                <Route
                  exact
                  key={`route-${i}`}
                  path={route.path}
                  render={props => {
                    return (
                      <route.component
                        {...props}
                        githubService={this.githubService}
                      />
                    )
                  }}
                />
              )}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
