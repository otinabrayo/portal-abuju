const app = require('./server');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Development server is running on port ${PORT}`);
});