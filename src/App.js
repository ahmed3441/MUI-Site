// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Products from "./pages/ProductsPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
