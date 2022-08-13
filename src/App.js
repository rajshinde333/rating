import React, { Component } from "react";
import "./App.css";
import Rating from "./Components/Rating";
import ThankYou from "./Components/ThankYou";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Rating />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
