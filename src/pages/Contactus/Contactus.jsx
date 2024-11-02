import React from "react";
import Header from "../../components/Common/Header";
import { TextField, Button, Box } from "@mui/material";
import ContactUsImage from "./contactus.svg";
const Contactus = () => {
  return (
    <>
      <Header />
      <div className="my-8 md:h-[500px] flex items-center flex-col justify-center">
        <div className="text-center pt-6 w-full">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r bg-blue-400 text-transparent bg-clip-text">
            Contact us
          </h1>
          <div className="mt-2 mx-auto w-54 h-1 bg-gradient-to-r bg-blue-400 rounded w-3/4"></div>
        </div>
        <div className="flex gap-10 w-full justify-center md:flex-row flex-col mt-5 items-center">
          <img src={ContactUsImage} alt="Contact Us" width={400} height={300} />
          <Box
            component="form"
            sx={{
              mt: 4,
              maxWidth: 600,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            className="md:w-full !w-[90%]"
          >
            <TextField required label="Name" variant="outlined" fullWidth />
            <TextField
              required
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              className="mt-4 px-6 py-3 text-white font-semibold rounded-lg shadow-md  transition duration-300 ease-in-out"
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Contactus;
