import React, { useEffect } from "react";
//import { Elements } from "@stripe/react-stripe-js";
//import '@stripe/stripe-js';
import './App.css';
import Header from "./header";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./checkout";
import Login from "./Login";
import { auth } from "./firebase";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import "./reducer";
import Payment from "./Payment";

/*
const promise = loadStripe(
  "pk_test_51ItS1cSCvZnRB6dFMuH7gHprTKdO84ndBlCMhcJBNum5kmB7WI0fxzchdQSg3oaTEj8Ccpi0Ne0gMvL95If4BNJh00rBk6svH3"
);*/

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
  <Router>
    <div className="App">
    <Switch>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
           <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
         <Route path="/">
            <Header />
            <Home />
          </Route>
     </Switch>
    </div>
  </Router>
  );
}

export default App;
