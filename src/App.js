import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import LoadingScreen from './pages/LoadingScreen/LoadingScreen'
import HomeScreen from './pages/HomeScreen/HomeScreen';
import FeaturesScreen from './pages/FeaturesScreen/FeaturesScreen';
import TeamInfoScreen from './pages/TeamInfoScreen/TeamInfoScreen';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoadingScreen}></Route>
        <Route exact path="/home" component={HomeScreen}></Route>
        <Route exact path="/features" component={FeaturesScreen}></Route>
        <Route exact path="/team" component={TeamInfoScreen}></Route>
      </Switch>
    </Router>
  );
}

export default App;
