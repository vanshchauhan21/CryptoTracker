import React, { useEffect, useState } from "react";
import Header from "../../components/Common/Header";
import { Button, Typography, Box, Container, Grid } from "@mui/material";
import { Toaster } from "react-hot-toast";
import logo from "../../assets/logo.jpg";
import profitLoss from "../../assets/video.mp4";
import davidBanner from "../../assets/Free-trial.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from '../../components/Testimonials/Testimonials';
import Stats from './Stats';
import Contributors from '../contributor';

const AboutUs = () => {
  const [mode, setMode] = useState(false);
  const theme = localStorage.getItem("theme");

  useEffect(() => {
    if (theme === "dark") {
      setMode(true);
    }
  }, [theme]);

  useEffect(() => {
    AOS.init();
  }, []);

  const sections = [
    {
      title: "Our Mission",
      content: "Our mission is to make cryptocurrency data accessible, understandable, and actionable. In a landscape where information can change in an instant, we aim to be your trusted source for up-to-date market insights.",
      image: davidBanner,
      aosText: "fade-right",
      aosImage: "fade-left"
    },
    {
      title: "What We Offer",
      content: "CryptoTracker provides live price tracking, portfolio management, latest news and alerts, and educational resources. Our platform is designed to empower users with comprehensive tools and information.",
      video: profitLoss,
      aosText: "fade-left",
      aosImage: "fade-right"
    },
    {
      title: "Security First",
      content: "Security is our top priority. We implement robust measures to protect your data and ensure a safe, reliable experience. Your trust is paramount, and we are committed to maintaining the highest standards of privacy and security.",
      aosText: "fade-right",
      aosImage: "fade-left"
    },
    {
      title: "Join Our Journey",
      content: "Whether you're looking to invest, trade, or stay informed, CryptoTracker is here to support you. Join us in unlocking the potential of cryptocurrency for everyone.",
      aosText: "fade-left",
      aosImage: "fade-right"
    }
  ];

  return (
    <>
      <Header />
      <Toaster />

      {/* Hero Section */}
      <Box sx={{
        background: mode ? 'linear-gradient(45deg, #2C3E50 30%, #34495E 90%)' : 'linear-gradient(45deg, #ECE9E6 30%, #FFFFFF 90%)',
        color: mode ? 'white' : 'black',
        py: 8
      }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <img src={logo} alt="CryptoTracker Logo" style={{ width: '500px', height: '300px', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                About CryptoTracker
              </Typography>
              <Typography variant="h5">
                Your dedicated platform for navigating the dynamic world of cryptocurrency.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <Box key={index} sx={{
          py: 6,
          backgroundColor: index % 2 === 0
            ? (mode ? '#424242' : '#f5f5f5')
            : (mode ? '#303030' : '#ffffff')
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }} data-aos={section.aosText}>
                <Typography variant="h4" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body1">
                  {section.content}
                </Typography>
                <div className="logo-container" style={{ textAlign: 'center', margin: '20px auto' }}>
          <img 
            src={require('../../assets/logo.jpg')} // Adjust the path to your logo image
            alt="CryptoTracker Logo" 
            className="logo" 
            style={{ width: '150px', height: 'auto' }} // Inline styles for logo size
          />
          <h2 style={{ fontSize: '2rem', marginTop: '10px' }}>CryptoTracker</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Your trusted cryptocurrency tracking platform.</p>
        </div>
              </Grid>
              <Grid item xs ={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }} data-aos={section.aosImage}>
                {section.video ? (
                  <video
                    className="background-video"
                    preload="auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '500px', height: 'auto', borderRadius: '8px' }}
                    poster="/static/images/onboarding/profit-loss-banner.webp"
                  >
                    <source src={section.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : section.image ? (
                  <img
                    src={section.image}
                    alt="Our Mission"
                    style={{ width: '500px', height: '300px', borderRadius: '8px' }}
                  />
                ) : null}
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}
<div className="bg-white p-4 rounded-lg shadow-md max-w-6xl mx-auto mb-12 mt-6 d-flex justify-center">
  <div className="text-center text-3xl font-bold mb-4">Our Stats</div>
  <Stats />
</div>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-6xl mx-auto mb-12 d-flex justify-center">
        {/* <div className="text-center text-3xl font-bold mb-4">Meet Our Contributors</div> */}
        <Contributors />
      </div>
      {/* Call to Action */}
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            Ready to start your crypto journey?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/signup"
            sx={{ mt: 2, py: 1, px: 4, fontSize: '1.2rem' }}
          >
            Join Us Now
          </Button>
        </Container>
      </Box>
      <Testimonials />
    </>
  );
};

export default AboutUs;