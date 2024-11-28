const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config({ path: './server.env' });
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Your verify token for webhook
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

// Your page access token for Facebook
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

// Your page ID 
const PAGE_ID = process.env.PAGE_ID;

// Verify webhook (this is called by Facebook during webhook setup)
app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === VERIFY_TOKEN) {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403); // Unauthorized
  }
});

// Handle incoming messages
app.post('/webhook', async (req, res) => {
  const data = req.body;

  if (data.object === 'page') {
    for (let entry of data.entry) {
      for (let messagingEvent of entry.messaging) {
        const senderId = messagingEvent.sender.id;

        if (messagingEvent.message) {
          await handleMessage(senderId, messagingEvent.message);
        }
      }
    }
  }

  res.status(200).send('EVENT_RECEIVED');
});

// Function to send a message via Facebook's Graph API
function sendTextMessage(senderId, messageText) {
  axios.post('https://graph.facebook.com/v21.0/me/messages?access_token=' + PAGE_ACCESS_TOKEN, {
    recipient: { id: senderId },
    message: { text: messageText }
  })
    .then(response => {
      console.log('Message sent successfully:', response.data);
    })
    .catch(error => {
      if (error.response) {
        // Log the full error response
        console.error('Error response from Facebook API:', error.response.data);
      } else {
        // Log any other error
        console.error('Error sending message:', error.message);
      }
    });

}

// Function to handle received messages and respond
async function handleMessage(senderId, message) {
  let responseText = '';

  const text = message.text;

  // Simple "Hi" to "Hello" response
  switch (text) {
    case 'hi':
      responseText = 'Hello!';
      break;
    case 'chào':
      responseText = 'Chào cc (các cậu)';
      break;
    default:
      responseText = "Cảm ơn bạn đã nhắn tin cho page";
  }

  //Send the response message to user
  sendTextMessage(senderId, responseText);

}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});