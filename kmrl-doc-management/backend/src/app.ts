import express from 'express';
import mongoose from 'mongoose';
import documentRoutes from './routes/documentRoutes';
import { json } from 'body-parser';
import { authMiddleware } from './middleware/authMiddleware';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(json());
app.use(authMiddleware);

// Routes
app.use('/api/documents', documentRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kmrl-docs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});