import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/Main/Main';
import HealthyRecipes from './components/HealthyRecipes/HealthyRecipes';
import EasyRecipes from './components/EasyRecipes/EasyRecipes';
import DailyRecipes from './components/DailyRecipes/DailyRecipes';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Details from './components/Details/Details';
import OccasionsRecipes from './components/OccasionsRecipes/OccasionsRecipes';
function App() {

  return (
    <Router>
      <Switch>
        <Route  path={["/","/home"]} exact component={Main} />
        <Route  path="/healthy-recipes" component={HealthyRecipes} />
        <Route  path="/easy-recipes" component={EasyRecipes} />
        <Route  path="/daily-recipes" component={DailyRecipes} />
        <Route  path="/occasions-recipes" component={OccasionsRecipes} />
        <Route  path="/about-us" component={AboutUs} />
        <Route  path="/contact-us" component={ContactUs} />
        <Route  path="/login" component={Login} />
        <Route  path="/sign-up" component={Signup} />
        <Route exact path="/productid-details/:id?" render={({match}) => <Details id={match.params.id} />}/>
      </Switch>
    </Router>
  );
}
export default App;
