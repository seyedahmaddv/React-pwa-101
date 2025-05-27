import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
      <Router>
        <Navbar />
        <Suspense fallback={<div>در حال بارگذاری...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
