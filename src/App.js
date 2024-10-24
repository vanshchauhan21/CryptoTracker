import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next"; // Import the provider
import i18n from "./i18n"; // Import the i18n instance
import "./App.css";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Faq from "./pages/Faq";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
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

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    document.body.addEventListener("mousemove", moveCursor);

    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}> {/* Wrap the app */}
      <div className="App">
        <div className="cursor" id="cursor" />
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
      <Footer />
    </I18nextProvider>
  );
}

export default App;
