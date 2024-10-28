import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Faq from "./pages/Faq";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import TermCondition from "./pages/TermCondition";
import NotFoundPage from "./components/PageNotFound/PageNotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  // Use useRef to keep track of the cursor element
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current; // Access the cursor DOM element

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.style.transform = "scale(1.5)";
    };

    const handleMouseUp = () => {
      cursor.style.transform = "scale(1)";
    };

    // Attach event listeners
    document.body.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mousedown", handleMouseDown);
    document.body.addEventListener("mouseup", handleMouseUp);

    // Cleanup event listeners on component unmount
    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mousedown", handleMouseDown);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <div className="App">
        <div className="cursor" ref={cursorRef} id="cursor" />
        <div className="cursor-pointer" id="cursor-pointer" />
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/coin/:id" element={<Coin />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/terms-conditions" element={<TermCondition />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
      <div className="footbelow">
        <Footer />
      </div>
    </>
  );
}

export default App;
