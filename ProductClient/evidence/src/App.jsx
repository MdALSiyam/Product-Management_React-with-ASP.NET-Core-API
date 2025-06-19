import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./layer/Footer";
import { Nav } from "./layer/Nav";
import { Home } from "./Component/Home";
import { Product } from "./Component/Product";
import { Create } from "./Component/CreateProduct";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // The main div can be kept, but the container within it will manage the content area.
    <div>
      <BrowserRouter>
        <Nav />

        <main className="container mt-4 mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/add" element={<Create />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;