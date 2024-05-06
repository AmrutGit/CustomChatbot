const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static('client/public'));

// Route for receiving messages
app.post('/message', (req, res) => {
    const { role, message } = req.body;
    console.log(`Role: ${role}, Message: ${message}`);

    res.json({
        reply: `Received your message as ${role}: ${message}`
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
