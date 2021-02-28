import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from '../src/screens/Home/Home'
import Detail from '../src/screens/Detail/Detail'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/detail'>
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
