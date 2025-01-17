import { Routes, Route } from "react-router-dom";

// Components
import MyNavbar from "./components/Navbar";

// Page
import Registerpage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/book/list" element={<ListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
