const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Define the path to your views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static assets from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample data (replace with actual data as needed)
const sampleData = {
    user: {
        username: 'JohnDoe',
        email: 'john@example.com',
    }
};

// Define routes
app.get('/', (req, res) => {
    // Render the home.handlebars template with the sample data
    res.render('home', sampleData);
});

app.get('/profile', (req, res) => {
    // Render the profile.handlebars template with the sample data
    res.render('profile', sampleData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
