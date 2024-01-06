const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');
const { default: axios } = require('axios');
require('dotenv').config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 3001;

const notion = new Client({ auth: process.env.NOTION_KEY });

// ! Actualizar cors para production
app.use(cors());

const API_URL = process.env.URL + process.env.PREFIX + process.env.ACCOUNT_ID

app.post('/notion-stores', async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.STORES_DB_ID,
      filter_properties: [
        "title",
        "roD%7D",
        "J%60EY",
        "%7BHLj"
      ],
      start_cursor: req.body.start_cursor
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en la solicitud a Notion');
  }
});

app.post('/notion-copys', async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.COPYS_DB_ID,
      filter_properties: [
        "title",
        "r%7Czb",
      ]
    })

    res.json(response)
  } catch (err) {
    res.status(500).send('Error en la solicitud a Notion');
  }
})

app.post('/tollfree-info', async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.STORES_DB_ID,
      filter_properties: [
        "title",
        "J%60EY",
        "gcGS",
        "cGjB",
        "~qCZ",
        "O%5EfE",
        "kG%3Du",
        "kI%5C%3E",
        "ic%7DS",
        "V~%7BJ"
      ],
      start_cursor: req.body.start_cursor
    })
    res.json(response);
  } catch {
    console.error(error);
    res.status(500).send('Error en la solicitud a Notion');
  }
})

app.post('/tollfreeVerification', async (req, res) => {
  try {
    const user = process.env.BW_USER
    const passwrd = process.env.BW_PASSWORD

    const response = await axios.post(`${API_URL}/tollFreeVerification`, req.body, {
      auth: {
        username: user,
        password: passwrd,
      },
      headers: {
        "Content-Type": "application/json"
      }
    })

    const resJson = await response.data;
    res.status(response.status).json(resJson);
  } catch (err) {
    res.status(500).json(err.response.data)
  }
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
