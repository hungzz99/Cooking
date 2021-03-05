import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import HealthyRecipes from './components/HealthyRecipes';
import EasyRecipes from './components/EasyRecipes';
import DailyRecipes from './components/DailyRecipes';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/" exact component={Main} />
        <Route  path="/healthy-recipes" component={HealthyRecipes} />
        <Route  path="/easy-recipes" component={EasyRecipes} />
        <Route  path="/daily-recipes" component={DailyRecipes} />
        <Route  path="/about-us" component={AboutUs} />
        <Route  path="/login" component={Login} />
        <Route  path="/sign-up" component={Signup} />
      </Switch>
    </Router>
  );
}
export default App;
