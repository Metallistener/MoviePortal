import * as React from 'react';
import { Switch,Route,HashRouter,Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store';
import Popular from './pages/popular/popular';
import Detailed from './pages/detailed/detailed';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>        
        <HashRouter>
            <Switch>
                <Route exact path="/home" component={Popular} />
                <Route path="/detailed/:id" component={Detailed} />
                {/* <Route path="/search-results/:movie_name" component={SearchResults} /> */}
                <Redirect from="/" to="/home" />
            </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
