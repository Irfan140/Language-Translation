import express from 'express';
import cors from 'cors';

const app = express();

// Middleware to handle cors
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true // Allow credentials for cookies, authorization headers, or TLS client certificates
}));


app.use(express.json({limit:"16kb"})); // Middleware to parse JSON bodies

app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Middleware to parse URL-encoded bodies


export default app;