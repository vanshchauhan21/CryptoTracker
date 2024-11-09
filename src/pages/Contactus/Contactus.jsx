import React, { useEffect, useState } from "react";
import Header from "../../components/Common/Header";
import { TextField, Button, Box } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "react-lottie";
import animationData from "./contact.json";
import "./contact.css";
const Contactus = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(false);
  const theme = localStorage.getItem("theme");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ Name: "", Email: "", Message: "" });
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Error: Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      setMode(true);
    }
  }, [theme]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    isClickToPauseDisabled: true,
  };

  return (
    <>
      <Header />
      <Toaster />
      <div className="my-8 md:h-[500px] flex items-center flex-col justify-center">
        <div className="text-center pt-6 w-full">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r bg-blue-400 text-transparent bg-clip-text">
            Contact us
          </h1>
          <div className="mt-2 mx-auto w-54 h-1 bg-gradient-to-r bg-blue-400 rounded w-3/4"></div>
        </div>
        <div className="flex gap-10 w-full justify-center md:flex-row flex-col mt-5 items-center">
          <Lottie
            options={defaultOptions}
            height={250}
            width={400}
            className="!m-0"
          />
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 4,
              maxWidth: 600,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            className="md:w-full !w-[90%]"
          >
            <TextField
              required
              label="Name"
              name="Name"
              variant="outlined"
              fullWidth
              value={formData.Name}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: mode ? "white" : "black" },
              }}
              InputProps={{
                style: { color: mode ? "white" : "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: mode ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: mode ? "white" : "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode ? "white" : "blue",
                  },
                },
              }}
            />
            <TextField
              required
              label="Email"
              name="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.Email}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: mode ? "white" : "black" },
              }}
              InputProps={{
                style: { color: mode ? "white" : "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: mode ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: mode ? "white" : "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode ? "white" : "blue",
                  },
                },
              }}
            />
            <TextField
              required
              label="Message"
              name="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.Message}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: mode ? "white" : "black" },
              }}
              InputProps={{
                style: { color: mode ? "white" : "black" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: mode ? "white" : "black",
                  },
                  "&:hover fieldset": {
                    borderColor: mode ? "white" : "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode ? "white" : "blue",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
              className="mt-4 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Contactus;
