import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Snackbar,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Header from '../components/Common/Header'; // Import the Header component
import { styled } from '@mui/material/styles';

// Alert component for Snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Styled Paper component for better aesthetics
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  boxShadow: theme.shadows[5],
}));

// Define CSS for animations
const emojiStyles = {
  fontSize: '2rem',
  cursor: 'pointer',
  transition: 'transform 0.2s ease', // Add transition for smooth animation
  display: 'inline-block',
};

const EmojiRating = ({ value, onChange }) => {
  const emojis = ['😡', '😟', '😐', '😊', '😁']; // Define emojis for ratings from 1 to 5

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginY: 2 }}>
      {emojis.map((emoji, index) => (
        <span
          key={index}
          onClick={() => onChange(index + 1)} // Click updates rating value
          style={{
            ...emojiStyles,
            opacity: value === index + 1 ? 1 : 0.5, // Highlight selected emoji
            animation: value === index + 1 ? 'bounce 0.5s' : 'none', // Apply bounce animation on selection
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')} // Scale up on hover
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Scale back down
        >
          {emoji}
        </span>
      ))}
    </Box>
  );
};

// Add the bounce animation to the document
const styles = `
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
`;

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && rating && feedback) {
      console.log({ name, email, rating, feedback });
      setOpen(true);
      // Reset form after submission
      setName("");
      setEmail("");
      setRating(0);
      setFeedback("");
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Header /> {/* Add the Header component here */}
      <style>{styles}</style> {/* Inject the CSS animation styles */}
      <Container maxWidth="sm" sx={{ marginTop: 5, marginBottom: 5 }}> {/* Added marginBottom */}
        <StyledPaper>
          <Typography variant="h4" align="center" gutterBottom>
            Feedback Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={( e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="legend">Rating :</Typography>
                <EmojiRating value={rating} onChange={setRating} /> {/* Use EmojiRating here */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Describe your experience"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                < Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white ',
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Your feedback has been successfully submitted!
            </Alert>
          </Snackbar>
        </StyledPaper>
      </Container>
    </div>
  );
};

export default Feedback;