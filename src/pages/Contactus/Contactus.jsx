import React, { useEffect, useState } from "react";
import Header from "../../components/Common/Header";
import { TextField, Button, Box } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "react-lottie";
import animationData from "./contact.json";
// import "./contact.css";

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
      <div className="md:h-[500px] flex flex-col items-center" style={{ display: "flex", justifycontent: "space-between", marginTop: "70px", padding: "20px"}}>
        <div style={{width: "541px", height:"658px", margin:"9rem"}}>
          <div style={{ width: "541px", height: "25px", top: "187px", left: "49px", alignItems: "flex-start"}}>
            <h1 style={{fontWeight: "600", fontSize: "30px", lineHeight: "25px", color: " #000000",margin:"0", padding: "0", textAlign: "left"}}>
              Get in touch with our team
            </h1>
          </div>
          <div style={{marginBottom: "20px", marginTop: "20px", width: "524px", height: "90px", top: "242px", left: "49px"}}>
            <h1 style={{fontWeight: "400", fontSize: "20px", lineHeight: "30px", color: " #8F8D8D", textAlign: "left"}}>
            Have questions or need assistance? Our team is here to help! Fill out the form and we'll get back to you as soon as possible.
            </h1>
          </div>
          <Lottie
              options={defaultOptions}
              height={250}
              width={524}
              className="!m-0"
              style={{margin: "0"}}
          />
        </div>
        <div className="mt-0" style={{ width: "700px", height: "650px", top: "187px", left: "686px", borderRadius: "20px", border: "4px solid #F5F5F5", margin:"5rem"}}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            // sx={{
            //   mt: 4,
            //   maxWidth: 600,
            //   display: "flex",
            //   flexDirection: "column",
            //   gap: 2,
            // }}
            // className="md:w-full !w-[90%]"
          >
            <div style={{width: "620px", height: "576px", top: "36px", left: "40px", margin:"40px"}}>
              <div style={{width: "620px", height: "476px"}}>
                <div style={{width: "620px", height: "79px"}}>
                  <div style={{width: "620px", height: "19px"}}>
                    <h4 style={{fontWeight:"400", fontSize: "16px", lineHeight: "19.36px", background:" #000000;"}}>Name*</h4>
                  </div>
                  <div>
                    <TextField
                      required
                      placeholder="Jane smith"
                      name="Name"
                      variant="outlined"
                      value={formData.Name}
                      onChange={handleChange}
                      slotProps={{
                        inputLabel: { style: {
                          width: 89,
                          height: 19,
                          fontSize: 16,
                          fontWeight: 400,
                          top: -1,
                          left: 8,
                          margin: 0,
                          color:"#8F8D8D",
                        }},
                        placeholder: { style: { fontWeight:400, color: "#8F8D8D" } }, // Light grey text
                      }}
                      sx={{
                        width: 620,
                        height: 50,
                        marginTop: 0.5,
                        opacity: 1,
                        color: "1px solid #000000",
                        borderRadius: 2,
                        background:"#FFFFFF",
                        "& .MuiOutlinedInput-input": {
                          color: "#8F8D8D", //  Keeps input text color as #8F8D8D when typing
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#8F8D8D", // Placeholder text color
                          opacity: 1, // Ensures it’s fully visible
                        },
                        // "& .MuiOutlinedInput-root": {
                        //   "&:hover fieldset": {
                        //     borderColor: mode ? "white" : "gray",
                        //   },
                        //   "&.Mui-focused fieldset": {
                        //     borderColor: mode ? "white" : "blue",
                        //   },
                        // },
                      }}
                    />
                  </div>
                </div>
                <div style={{width: "620px", height: "79px"}}>
                  <div style={{width: "620px", height: "19px"}}>
                    <h4 style={{fontWeight:"400", fontSize: "16px", lineHeight: "19.36px", background:" #000000;"}}>Email*</h4>
                  </div>
                  <div>
                    <TextField
                      required
                      placeholder="you@gmail.com"
                      name="Email"
                      type="email"
                      variant="outlined"
                      value={formData.Email}
                      onChange={handleChange}
                      slotProps={{
                        inputLabel: { style: {
                          width: 130,
                          height: 19,
                          fontSize: 16,
                          fontWeight: 400,
                          top: -1,
                          left: 8,
                          margin: 0,
                          color:"#8F8D8D",
                        }},
                        placeholder: { style: { fontWeight:400, color: "#8F8D8D" } }, // Light grey text
                      }}
                      sx={{
                        width: 620,
                        height: 50,
                        marginTop: 0.5,
                        opacity: 1,
                        color: "1px solid #000000",
                        borderRadius: 2,
                        background:"#FFFFFF",
                        "& .MuiOutlinedInput-input": {
                          color: "#8F8D8D", //  Keeps input text color as #8F8D8D when typing
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#8F8D8D",
                          opacity: 1,
                        },
                        // "& .MuiOutlinedInput-root": {
                        //   "&:hover fieldset": {
                        //     borderColor: mode ? "white" : "gray",
                        //   },
                        //   "&.Mui-focused fieldset": {
                        //     borderColor: mode ? "white" : "blue",
                        //   },
                        // },
                      }}
                    />
                  </div>
                </div>
                <div style={{width: "620px", height: "79px"}}>
                  <div style={{width: "620px", height: "19px"}}>
                    <h4 style={{fontWeight:"400", fontSize: "16px", lineHeight: "19.36px", background:" #000000;"}}>Phone*</h4>
                  </div>
                  <div>
                    <TextField
                      required
                      placeholder="+918477563893"
                      name="Phone"
                      variant="outlined"
                      value={formData.Phone}
                      onChange={handleChange}
                      slotProps={{
                        inputLabel: { style: {
                          width: 130,
                          height: 19,
                          fontSize: 16,
                          fontWeight: 400,
                          top: -1,
                          left: 8,
                          margin: 0,
                          color:"#8F8D8D",
                        }},
                        placeholder: { style: { color: "#8F8D8D" } }, // Light grey text
                      }}
                      sx={{
                        width: 620,
                        height: 50,
                        marginTop: 0.5,
                        opacity: 1,
                        color: "1px solid #000000",
                        borderRadius: 2,
                        background:"#FFFFFF",
                        "& .MuiOutlinedInput-input": {
                          color: "#8F8D8D", // Keeps input text color as #8F8D8D when typing
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#8F8D8D", // Placeholder text color
                          opacity: 1, // Ensures it’s fully visible
                        },
                        // "& .MuiOutlinedInput-root": {
                        //   "&:hover fieldset": {
                        //     borderColor: mode ? "white" : "gray",
                        //   },
                        //   "&.Mui-focused fieldset": {
                        //     borderColor: mode ? "white" : "blue",
                        //   },
                        // },
                      }}
                    />
                  </div>
                </div>
                <div style={{width: "620px", height: "179px"}}>
                  <div style={{width: "620px", height: "19px"}}>
                    <h4 style={{fontWeight:"400", fontSize: "16px", lineHeight: "19.36px", background:" #000000;"}}>Message*</h4>
                  </div>
                  <div>
                    <TextField
                      required
                      placeholder="Let us know how can we help."
                      name="Message"
                      multiline
                      rows={5}
                      variant="outlined"
                      value={formData.Message}
                      onChange={handleChange}
                      slotProps={{
                        inputLabel: { style: {
                          width: 228,
                          height: 19,
                          fontSize: 16,
                          fontWeight: 400,
                          top: -1,
                          left: 8,
                          margin: 0,
                          color:"#8F8D8D",
                        }},
                        placeholder: { style: { color: "#8F8D8D" } }, // Light grey text
                      }}
                      sx={{
                        width: 620,
                        height: 150,
                        marginTop: 0.5,
                        opacity: 1,
                        color: "1px solid #000000",
                        borderRadius: 2,
                        background:"#FFFFFF",
                        "& .MuiOutlinedInput-input": {
                          color: "#8F8D8D", //  Keeps input text color as #8F8D8D when typing
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#8F8D8D", // Placeholder text color
                          opacity: 1, // Ensures it’s fully visible
                        },
                        // "& .MuiOutlinedInput-root": {
                        //   "&:hover fieldset": {
                        //     borderColor: mode ? "white" : "gray",
                        //   },
                        //   "&.Mui-focused fieldset": {
                        //     borderColor: mode ? "white" : "blue",
                        //   },
                        // },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div style={{width: "620px", height: "60px", marginTop: "40px"}}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                  sx={{margin: 0, padding: 0, height: 60, color: "white", borderRadius: 3, backgroundColor:"#3A80E9"}}
                >
                  <div style={{textTransform: "none", width: 68, height: 24, fontSize: 20, fontWeight: 500, display: "flex", alignItems: "center"}}>
                    {loading ? "Sending..." : "Submit"}
                  </div>
                </Button>
              </div>
            </div>
          </Box>
        </div>
      </div> 
    </>
  );
};

export default Contactus;
