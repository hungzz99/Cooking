import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import HealthyRecipes from './components/HealthyRecipes';
import EasyRecipes from './components/EasyRecipes';
import DailyRecipes from './components/DailyRecipes';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Details from './components/Details';
function App() {

  return (
    <Router>
      <Switch>
        <Route  path={["/","/home"]} exact component={Main} />
        <Route  path="/healthy-recipes" component={HealthyRecipes} />
        <Route  path="/easy-recipes" component={EasyRecipes} />
        <Route  path="/daily-recipes" component={DailyRecipes} />
        <Route  path="/about-us" component={AboutUs} />
        <Route  path="/contact-us" component={ContactUs} />
        <Route  path="/login" component={Login} />
        <Route  path="/sign-up" component={Signup} />
        <Route  path="/productid-details" component={Details} />
      </Switch>
    </Router>
  );
}
export default App;
