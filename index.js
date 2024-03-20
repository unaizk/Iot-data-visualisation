
// ==========================================Import required modules and configuration files==========================================
import express from "express";
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables
import cookieParser from "cookie-parser";
const port = process.env.PORT || 5000;
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoute.js'

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON data in the request body.
// This allows us to access the JSON data in route handlers using req.body.
app.use(express.json());

// Middleware to parse incoming URL-encoded data in the request body.
// The extended option set to true allows handling rich objects and arrays in the URL-encoded data.
// This middleware makes the parsed data available in route handlers using req.body.
app.use(express.urlencoded({extended:true}))


app.use(cookieParser());


app.use(cors({ origin: "*", credentials: true }));
// Set up routes for handling user-related API requests
app.use('/api/users/', userRouter);

// Set up routes for handling admin-related API requests
app.use('/api/admin/', adminRouter);

// Set up a basic route for the root URL
app.get('/', (req, res) => res.send("Server is ready"));



// Start the Express server on the specified port
app.listen(port, () => console.log(`Server started on port ${port}`));
