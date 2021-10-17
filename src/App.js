import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import LoadingScreen from './pages/LoadingScreen/LoadingScreen'
// import HomeScreen from './pages/HomeScreen/HomeScreen';
//import FeaturesScreen from './pages/FeaturesScreen/FeaturesScreen';
// import TeamInfoScreen from './pages/TeamInfoScreen/TeamInfoScreen';
import Landing from "./pages/Landing/Landing"
// import FeaturesScreen from './pages/FeaturesScreen/FeaturesScreen';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoadingScreen}></Route>
        <Route exact path="/home" component={Landing}></Route>
        {/* <Route exact path="/features" component={FeaturesScreen}></Route> */}

      </Switch>
    </Router>
  );
}

export default App;
