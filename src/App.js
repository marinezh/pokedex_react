import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Pokelist from "./components/Pokelist";
import About from "./components/About";
import Home from "./components/Home";
import PokeSingle from "./components/PokeSingle";

import React, { Component } from "react";

const RouterWrapper = (props) => {
  const params = useParams();
  return <PokeSingle params={params} {...props} />; // {...props} does't pass anything right now
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokelist" element={<Pokelist />} />
            <Route path="pokelist/:pokesingle" element={<RouterWrapper />} />
            {/* <Route path="pokelist/:blablabla" element={<RouterWrapper />} /> */} 
            <Route path="about" element={<About />} />
          </Route>

          {/* <Route path = "/" element = {<Home />} />
          <Route path="/pokelist" element={<Pokelist />}/>
          <Route path="/about" element={<About />}/> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
