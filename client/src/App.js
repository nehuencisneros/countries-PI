import { Home, LandingPage, Form, Detail } from "./views"
import NavBar from "./components/NavBar/NavBar";
import { Route, Switch, useLocation } from 'react-router-dom';


function App() {
  const location = useLocation()

  return (
      <div className="App">
        {location.pathname !== "/" && <NavBar/>}
          <Switch>
            <Route exact path = "/" render={() => <LandingPage/>}/>
            <Route exact path = "/home" render={() => <Home/>}/>
            <Route exact path = "/detail" render={() => <Detail/>}/>
            <Route exact path = "/create" render={() => <Form/>}/>
          </Switch>
      </div>
  );
}

export default App;
