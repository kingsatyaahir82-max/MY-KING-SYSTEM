const express = require('express');
const bodyParser = require('body-parser');
const login = require("fb-chat-api");
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/start', (req, res) => {
    const { cookie, threadId, message, haterName } = req.body;
    let appState;
    try {
        appState = JSON.parse(cookie);
    } catch (e) {
        return res.send("Invalid Cookie Format.");
    }
    login({appState: appState}, (err, api) => {
        if(err) return res.send("Login Error: " + err);
        api.sendMessage(`${haterName} ${message}`, threadId);
    });
    res.send("System has been deployed by KING S4TY4 4HIR!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`System running on ${PORT}`));
