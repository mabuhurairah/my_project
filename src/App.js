import React from 'react';
import {
  BrowserRouter, 
  Router,
  Route,
  Routes
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Admin from './components/Admin';
import ContactUs from './components/ContactUs';
import Flights from './components/flights/Flights';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import NotFound from './components/NotFound';
import PageFooter from './components/PageFooter';
import Register from './components/Register';
import TopMenu from './components/TopMenu';
import UserData from './components/UserData';
import Users from './components/users/Users';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
      <div>
      <ToastContainer />
      <TopMenu />
        <Routes>
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/flights" exact component={Flights} />
          <Route path="/users" exact component={Users} />
          <Route path="/user-data" exact component={UserData} />
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/" exact component={LandingPage} />
          <Navigate to="/" replace={true} />
        </Routes>
      <PageFooter />
      </div>
    </Router>
  );
}

export default App;
