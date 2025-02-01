import React, { useEffect, useRef, useState } from 'react';
import { Container, TextField, Button, Paper, Box, List, ListItem, ListItemText, Divider, Stack, Avatar, Typography, CircularProgress } from '@mui/material';
import { Send as SendIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import Header from "../../components/Common/Header";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const GeminiChat = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState(() => {
        const savedHistory = localStorage.getItem('geminiChatHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });
    const chatContainerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI("apiKey");

    useEffect(() => {
        localStorage.setItem('geminiChatHistory', JSON.stringify(chatHistory));
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        setIsLoading(true);
        setError(null);

        const userMessage = { 
            role: "user", 
            content: userInput,
            timestamp: new Date().toLocaleTimeString(),
        };
        setChatHistory(prev => [...prev, userMessage]);
        setUserInput("");

        try {
            if (!apiKey) {
                throw new Error('Gemini API key not found. Please check your environment variables.');
            }

            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const chat = model.startChat({
                history: chatHistory.map(msg => ({
                    role: msg.role,
                    parts: [{ text: msg.content }],
                })),
            });

            const result = await chat.sendMessage(userInput);
            const response = await result.response;
            const text = await response.text();

            const botMessage = { 
                role: "model", 
                content: text,
                timestamp: new Date().toLocaleTimeString(),
            };
            setChatHistory(prev => [...prev, botMessage ]);
        } catch (err) {
            console.error('Error:', err);
            setError(err.message || 'Failed to get response from Gemini');
            toast.error(err.message || 'Failed to get response from Gemini');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearChat = () => {
        setChatHistory([]);
        localStorage.removeItem('geminiChatHistory');
        toast.info('Chat history cleared.');
    };

    return (
        <>
        <Header />
        <Container maxWidth="md" sx={{ pt: 12 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3, bgcolor: "#121212", color: "white" }}>
                    <Typography variant="h4" textAlign="center" gutterBottom>
                        Gemini AI Chat
                    </Typography>
                    <Box
                        ref={chatContainerRef}
                        sx={{
                            height: '60vh',
                            overflowY: 'auto',
                            p: 2,
                            bgcolor: '#1E1E1E',
                            borderRadius: 2,
                        }}
                    >
                        <List>
                            {chatHistory.map((msg, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                    <ListItem sx={{ display: 'flex', justifyContent: msg.role === "user" ? 'flex-end' : 'flex-start' }}>
                                        {msg.role !== "user" && <Avatar alt="Bot" src="/bot-avatar.png" />}
                                        <Paper
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 2,
                                                bgcolor: msg.role === "user" ? '#007AFF' : '#2C2C2C',
                                                color: msg.role === "user" ? 'white' : 'lightgray',
                                                maxWidth: '75%',
                                                boxShadow: 2,
                                            }}
                                        >
                                            <ListItemText
                                                primary={msg.content}
                                                secondary={<Typography variant="caption" align="right">{msg.timestamp}</Typography>}
                                            />
                                        </Paper>
                                        {msg.role === "user" && <Avatar alt="User" src="/user-avatar.png" />}
                                    </ListItem>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <Box display="flex" justifyContent="center" py={2}>
                                    <CircularProgress size={24} />
                                </Box>
                            )}
                            {error && (
                                <Typography color="error" textAlign="center">{error}</Typography>
                            )}
                        </List>
                    </Box>
                    <Divider sx={{ my: 2, bgcolor: "#444" }} />
                    <Stack direction="row" spacing={2}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type a message..."
                            sx={{ bgcolor: '#2C2C2C', borderRadius: 1, color: 'white', input: { color: 'white' } }}
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSubmit(e)}
                        />
                        <Button variant="contained" color="primary" endIcon={<SendIcon />} onClick={handleSubmit}>
                            Send
                        </Button>
                        <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={handleClearChat}>
                            Clear
                        </Button>
                    </Stack>
                </Paper>
            </motion.div>
            <ToastContainer />
        </Container>
        </>
    );
};

export default GeminiChat;
