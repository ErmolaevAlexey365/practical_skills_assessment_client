/* eslint-disable no-unused-vars */

import "./App.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Pricing/Pricing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route exact path={"/service/:service"} element={<Services animate={true}/>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
