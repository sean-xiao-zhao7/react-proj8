import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./components/pages/Welcome";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductDetails";
import Header from "./components/layouts/Header";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/welcome" replace />}
                    exact
                />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/welcome/new-user" element={<p>New User</p>} />
                <Route path="/products" element={<Products />} exact />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </div>
    );
}

export default App;
