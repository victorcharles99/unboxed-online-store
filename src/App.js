import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Pages/AnimatedRoutes";
import data from "./data.json";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <AnimatedRoutes />
        </Router>
        <main>
          <div className="content">
            <div className="main"></div>
            <div className="sidebar"></div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
