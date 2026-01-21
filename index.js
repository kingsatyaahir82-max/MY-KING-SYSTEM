const express = require('express');
const bodyParser = require('body-parser');
const login = require("fb-chat-api");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
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
        .header { font-size: 26px; font-weight: 900; color: #ffffff; text-shadow: 0 0 10px #ff007f; margin-bottom: 20px; }
        textarea, input { width: 100%; margin-bottom: 15px; padding: 12px; border-radius: 10px; border: 1px solid #ff007f; background: #0d0118; color: #ffffff; box-sizing: border-box; outline: none; }
        button { background: linear-gradient(45deg, #ff007f, #7b2cbf); color: white; padding: 15px; border: none; border-radius: 10px; width: 100%; font-weight: bold; cursor: pointer; box-shadow: 0 0 15px #ff007f; font-size: 16px; text-transform: uppercase; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">KING S4TY4 4HIR</div>
        <form action="/start" method="POST">
            <textarea name="cookie" placeholder="ENTER YOUR JSON COOKIES" rows="4" required></textarea>
            <input type="text" name="haterName" placeholder="ENTER HATER NAME">
            <input type="text" name="threadId" placeholder="ENTER TARGET ID / THREAD ID" required>
            <textarea name="message" placeholder="ENTER YOUR MESSAGES" rows="3" required></textarea>
            <button type="submit">START SYSTEM</button
            
