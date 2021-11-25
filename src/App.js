
import './App.css';
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Registration/Register';
import Home from './Pages/Home/Home/Home';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Router>
          <Switch>

            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
