import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import ProductPage from "./pages/product-page/ProductPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact render={LandingPage} />
        <Route path="/products/:id" render={ProductPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
