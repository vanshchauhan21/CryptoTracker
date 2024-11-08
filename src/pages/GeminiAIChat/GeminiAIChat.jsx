import React, { useEffect, useRef, useState } from 'react';
import { Container, TextField, Button, Paper, Box, List, ListItem, ListItemText, Divider, IconButton, Stack, Card, CardContent } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import Header from "../../components/Common/Header";
import { Send, Trash2 } from 'react-feather';
import ScrollArea from 'react-scrollbars-custom';
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

    const apiKey = 'AIzaSyBqKHw6cnbP1VnfQySbrsY6_81z7Xnbgpw';  
    const genAI = new GoogleGenerativeAI(apiKey);

    useEffect(() => {
        localStorage.setItem('geminiChatHistory', JSON.stringify(chatHistory));
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const formatMessage = (text) => {
        return text.split('\n').map((line, i) => (
            <React.Fragment key={i}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        setIsLoading(true);
        setError(null);

        const userMessage = { role: "user", content: userInput };
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
            const text = response.text();

            const botMessage = { role: "model", content: text };
            setChatHistory(prev => [...prev, botMessage ]);
        } catch (err) {
            console.error('Error:', err);
            setError(err.message || 'Failed to get response from Gemini');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearChat = () => {
        setChatHistory([]);
        localStorage.removeItem('geminiChatHistory');
    };

    return (
        <>
        <Header />
        <div>
            <Container style={{ zIndex: 1, marginBottom: '2rem' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Paper elevation={3} style={{ padding: '1.5rem', borderRadius: '8px', background:"#0D71E2" }}>
                        <motion.h1
                            className="m-2 text-5xl text-center font-extrabold text-white"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Gemini AI Chat
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Box
                                ref={chatContainerRef}
                                style={{
                                    height: '60vh',
                                    overflowY: 'auto',
                                    padding: '1rem',
                                    backgroundColor: '#f5f5f5',
                                    borderRadius: '8px',
                                    marginBottom: '1rem',
                                }}
                            >
                                <List>
                                    {chatHistory.map((msg, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            style={{ marginBottom: '0.5rem' }}
                                        >
                                            <ListItem
                                                alignItems="flex-start"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: msg.role === "user" ? 'flex-end' : 'flex-start',
                                                }}
                                            >
                                                <Paper
                                                    elevation={1}
                                                    style={{
                                                        padding: '0.01rem 1rem',
                                                        borderRadius: '5px',
                                                        backgroundColor: msg.role === "user" ? '#0D71E2' : 'white',
                                                        color: msg.role === "user" ? 'white' : 'black',
                                                        maxWidth: '70%',
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={msg.role === "user" ? msg.content : formatMessage(msg.content)}
                                                        secondary={msg.role === "user" ? "" : msg.role}
                                                        secondaryTypographyProps={{
                                                            style: { color: msg.role === "user" ? '#bbdefb' : '#757575' },
                                                        }}
                                                    />
                                                </Paper>
                                            </ListItem>
                                        </motion.div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-gray-100 p-3 rounded-lg">
                                                Thinking...
                                            </div>
                                        </div>
                                    )}
                                    {error && (
                                        <div className="flex justify-center">
                                            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                                                {error}
                                            </div>
                                        </div>
                                    )}
                                </List>
                            </Box>
                        </motion.div>
                        <Divider />
                        <Stack direction="row" spacing={2} style={{ marginTop: '1rem' }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Type a message..."
                                style={{ backgroundColor: 'white', borderRadius: '4px' }}
                            />
                            <Button type="submit" variant="contained" style={{ background: "white", color: "black" }} endIcon={<SendIcon />} onClick={handleSubmit}>
                                Send
                            </Button>
                            <Button variant="contained" style={{background:"white",color:"black"}} onClick={handleClearChat}>
                                Clear
                            </Button>
                        </Stack>
                    </Paper>
                </motion.div>
                <ToastContainer />
            </Container>
        </div>
        </>
    );
};

export default GeminiChat;
