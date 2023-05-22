import { Home, LandingPage, Form, Detail } from "./views"
import { Route, Switch } from 'react-router-dom';


function App() {

  return (
      <div className="App">
          <Switch>
            <Route exact path = "/" render={() => <LandingPage/>}/>
            <Route exact path = "/home" render={() => <Home/>}/>
            <Route exact path = "/home/:id" render={() => <Detail/>}/>
            <Route exact path = "/form" render={() => <Form/>}/>
          </Switch>
      </div>
  );
}

export default App;
