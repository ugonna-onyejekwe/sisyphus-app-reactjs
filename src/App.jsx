import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Login_page } from "./pages/login/login";
import { Home } from "./pages/home/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Login_page />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
