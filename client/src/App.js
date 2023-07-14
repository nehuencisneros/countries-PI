import { Home, LandingPage, Form, Detail, NotFound } from "./views"
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
      <div className="App">
          <Switch>
            <Route exact path = "/" render={() => <LandingPage/>}/>
            <Route exact path = "/home" render={() => <Home/>}/>
            <Route exact path = "/home/:id" render={() => <Detail/>}/>
            <Route exact path = "/form" render={() => <Form/>}/>
            <Route exact path = "/form/:id" render={() => <Form/>}/>
            <Route exact path = "*" render={() => <NotFound/>}/>
          </Switch>
      </div>
  );
}

export default App;
