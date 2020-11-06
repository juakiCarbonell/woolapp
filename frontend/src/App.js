import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Wool from "./Pages/Wool";
import WoolCreate from "./Pages/WoolCreate";
import WoolEdit from "./Pages/WoolEdit";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/wool/create">
              <WoolCreate mode="create" />
            </Route>
            <Route exact path="/wool/edit/:id">
              <WoolEdit mode="edit" />
            </Route>
            <Route exact path="/wool/:id">
              <Wool />
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
