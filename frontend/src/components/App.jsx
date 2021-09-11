import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Notes from "./Notes";
import CreateNote from "./CreateNote";

function App() {
    return (

        <Router>
            <Navbar />

            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/notes">
                <Notes />
            </Route>

            <Route path="/create">
                <CreateNote />
            </Route>

        </Router>
    );




}





export default App;