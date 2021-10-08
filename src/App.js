import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import LoadingScreen from './pages/LoadingScreen/LoadingScreen'
import HomeScreen from './pages/HomeScreen/HomeScreen';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoadingScreen}></Route>
        <Route exact path="/home" component={HomeScreen}></Route>
      </Switch>
    </Router>
  );
}

export default App;
