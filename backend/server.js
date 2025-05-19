const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Validation middleware
const validateRegistration = (req, res, next) => {
    console.log('Received registration request:', req.body);
    const { username, password } = req.body;

    if (!username || !password) {
        console.log('Validation failed: Missing username or password');
        return res.status(400).json({ message: 'Username and password are required' });
    }

    if (username.length < 3) {
        console.log('Validation failed: Username too short');
        return res.status(400).json({ message: 'Username must be at least 3 characters long' });
    }

    if (password.length < 4) {
        console.log('Validation failed: Password too short');
        return res.status(400).json({ message: 'Password must be at least 4 characters long' });
    }

    console.log('Validation passed for:', username);
    next();
};

// Authentication routes
app.post('/api/register', validateRegistration, async (req, res) => {
    const { username, password } = req.body;
    console.log('Processing registration for:', username);

    try {
        // Check if username already exists
        const userCheck = await db.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );

        if (userCheck.rows.length > 0) {
            console.log('Registration failed: Username already exists');
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Add new user
        await db.query(
            'INSERT INTO users (username, password) VALUES ($1, $2)',
            [username, password]
        );

        console.log('New user registered successfully:', username);
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Login attempt for:', username);

    try {
        // Find user
        const result = await db.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        if (result.rows.length > 0) {
            console.log('Login successful for:', username);
            res.json({
                message: 'Login successful',
                user: { username: result.rows[0].username }
            });
        } else {
            console.log('Login failed for:', username);
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Error during login' });
    }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});