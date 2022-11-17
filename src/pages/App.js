import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductView from "./ProductView";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("currentuser"));
  if (user) return children;
  else return <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductView />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
