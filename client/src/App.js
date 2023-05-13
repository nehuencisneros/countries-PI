import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        <h1>Countries App</h1>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
