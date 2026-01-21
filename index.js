const express = require('express');
const bodyParser = require('body-parser');
const login = require("fb-chat-api");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// सीधा HTML डिजाइन यहाँ से चलेगा
app.get('/', (req, res) => {
    res.set('Cache-Control', 'no-store'); // पुराने डेटा को साफ़ करने के लिए
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KING S4TY4 4HIR SYSTEM</title>
    <style>
        body { background-color: #0d0118; color: #ff007f; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 20px; }
        .container { background: #150527; border: 2px solid #ff007f; padding: 25px; width: 100%; max-width: 380px; border-radius: 20px; box-shadow: 0 0 25px #ff007f; text-align: center; }
        .header { font-size: 26px; font-weight: 900; color: #ffffff; text-shadow: 0 0 10px #ff007f; margin-bottom: 20px; text-transform: uppercase; }
        textarea, input { width: 100%; margin-bottom: 15px; padding: 12px; border-radius: 10px; border: 1px solid #ff007f; background: #0d0118; color: #ffffff; box-sizing: border-box; outline: none; }
        button { background: linear-gradient(45deg, #ff007f, #7b2cbf); color: white; padding: 15px; border: none; border-radius: 10px; width: 100%; font-weight: bold; cursor: pointer; box-shadow: 0 0 15px #ff007f; font-size: 16px; text-transform: uppercase; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">KING S4TY4 4HIR</div>
        <form action="/start" method="POST">
            <textarea name="cookie" placeholder="ENTER YOUR JSON COOKIES" rows="4" required></textarea>
            <input type="text" name="haterName" placeholder="ENTER YOUR NAME">
            <input type="text" name="threadId" placeholder="ENTER TARGET ID" required>
            <textarea name="message" placeholder="ENTER MESSAGES" rows="3" required></textarea>
            <button type="submit">START SYSTEM</button>
        </form>
    </div>
</body>
</html>
    `);
});

app.post('/start', (req, res) => {
    const { cookie, threadId, message, haterName } = req.body;
    let appState;
    try {
        appState = JSON.parse(cookie);
    } catch (e) {
        return res.send("Invalid Cookie Format. Use JSON.");
    }
    login({appState: appState}, (err, api) => {
        if(err) return res.send("Login Error: " + err);
        api.sendMessage(`${haterName} ${message}`, threadId);
    });
    res.send("<h1>System Started! Check Messenger.</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server live on port ${PORT}`);
});
