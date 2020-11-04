import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Wool from "./Pages/Wool";
import WoolEdit from "./Pages/WoolEdit";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/wool/:id">
            <Wool />
          </Route>
          <Route exact path="/wool_create">
            <WoolEdit />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
