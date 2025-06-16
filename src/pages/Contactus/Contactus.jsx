import React, { useEffect, useState } from "react";
import Header from "../../components/Common/Header";
import { TextField, Button, Box } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import Lottie from "react-lottie";
import animationData from "./contact.json";

const style = (mode) => {
  if (mode === "dark") {
    return {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "70px",
      padding: "20px",
      color: "white",
    };
  }
  return {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "70px",
    padding: "20px",
    color: "black",
  };
};

const Contactus = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("theme") === "dark");

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
        setFormData({ Name: "", Email: "", Phone: "", Message: "" });
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
    const handleThemeChange = () => {
      setMode(localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("storage", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

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
      <div style={style(mode)}>
        <div style={{ width: 400, margin: "6rem 2rem 2rem 6rem" }}>
          <h1
            style={{
              fontWeight: 600,
              fontSize: 30,
              color: "#000",
              margin: 0,
              textAlign: "left",
            }}
          >
            Get in touch with our team
          </h1>
          <p
            style={{
              fontWeight: 400,
              fontSize: 18,
              color: "#8F8D8D",
              margin: "20px 0",
              textAlign: "left",
            }}
          >
            Have questions or need assistance? Our team is here to help! Fill out the form and we'll get back to you as soon as possible.
          </p>
          <Lottie options={defaultOptions} height={200} width={350} />
        </div>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: 400,
            p: 4,
            borderRadius: 3,
            border: "4px solid #F5F5F5",
            background: "#fff",
            margin: "4rem 6rem 2rem 2rem",
            boxShadow: 2,
            height: "100%",
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <h4
              style={{
                fontWeight: 400,
                fontSize: 16,
                color: "#000",
                marginBottom: 8,
                paddingLeft: 2,
              }}
            >
              Name*
            </h4>
            <TextField
              required
              placeholder="Jane smith"
              name="Name"
              variant="outlined"
              value={formData.Name}
              onChange={handleChange}
              sx={{
                width: "100%",
                background: "#fff",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  height: 48,
                  alignItems: "center",
                  "& input": {
                    height: "100%",
                    padding: "12.5px 14px",
                    boxSizing: "border-box",
                  },
                  "&:hover fieldset": {
                    borderColor: mode ? "white" : "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode ? "white" : "blue",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#8F8D8D",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#8F8D8D",
                  opacity: 1,
                },
              }}
              InputProps={{
                startAdornment: (
                  <User style={{ marginRight: 8, color: "#8F8D8D" }} size={20} />
                ),
              }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <h4
              style={{
                fontWeight: 400,
                fontSize: 16,
                color: "#000",
                marginBottom: 8,
                paddingLeft: 2,
              }}
            >
              Email*
            </h4>
            <TextField
              required
              fullWidth
              placeholder="you@gmail.com"
              name="Email"
              type="email"
              variant="outlined"
              value={formData.Email}
              onChange={handleChange}
              sx={{
                background: "#fff",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  height: 48,
                  alignItems: "center",
                  "& input": {
                    height: "100%",
                    padding: "12.5px 14px",
                    boxSizing: "border-box",
                  },
                  "&:hover fieldset": {
                    borderColor: mode ? "white" : "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode ? "white" : "blue",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#8F8D8D",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#8F8D8D",
                  opacity: 1,
                },
              }}
              InputProps={{
                startAdornment: (
                  <Mail style={{ marginRight: 8, color: "#8F8D8D" }} size={20} />
                ),
              }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <h4
              style={{
                fontWeight: 400,
                fontSize: 16,
                color: "#000",
                marginBottom: 8,
                paddingLeft: 2,
              }}
            >
              Phone*
            </h4>
            <TextField
              required
              fullWidth
              placeholder="+918477563893"
              name="Phone"
              variant="outlined"
              value={formData.Phone}
              onChange={handleChange}
              sx={{
                background: "#fff",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  height: 48,
                  alignItems: "center",
                  "& input": {
                    height: "100%",
                    padding: "12.5px 14px",
                    boxSizing: "border-box",
                  },
                  "&:hover fieldset": {
                    borderColor: mode ? "white" : "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode ? "white" : "blue",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#8F8D8D",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#8F8D8D",
                  opacity: 1,
                },
              }}
              InputProps={{
                startAdornment: (
                  <Phone style={{ marginRight: 8, color: "#8F8D8D" }} size={20} />
                ),
              }}
            />
          </div>
          <div style={{ position: "relative", width: "100%", marginBottom: 24 }}>
            <h4
              style={{
                fontWeight: 400,
                fontSize: 16,
                color: "#000",
                marginBottom: 8,
                paddingLeft: 2,
              }}
            >
              Message*
            </h4>
            <MessageSquare
              size={20}
              style={{
                position: "absolute",
                left: 14,
                top: 44, // Adjust as needed
                color: "#8F8D8D",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <TextField
              required
              fullWidth
              placeholder="Let us know how can we help."
              name="Message"
              multiline
              rows={4}
              variant="outlined"
              value={formData.Message}
              onChange={handleChange}
              sx={{
                background: "#fff",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "& textarea": {
                    paddingLeft: "40px", // Increased padding for more space
                  },
                  "&:hover fieldset": {
                    borderColor: mode ? "white" : "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode ? "white" : "blue",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#8F8D8D",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#8F8D8D",
                  opacity: 1,
                },
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            sx={{
              height: 48,
              borderRadius: 2,
              backgroundColor: "#3A80E9",
              textTransform: "none",
              fontSize: 18,
              fontWeight: 500,
              boxShadow: "none",
              "&:hover": {
                color: "black",
              },
            }}
            fullWidth
            startIcon={<Send size={20} />}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Contactus;