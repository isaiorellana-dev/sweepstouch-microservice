const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 3001;

const notion = new Client({ auth: process.env.NOTION_KEY });
app.use(cors());

const API_URL = process.env.URL + process.env.PREFIX + process.env.ACCOUNT_ID

app.post('/notion-stores', async (req, res) => {
  try {
    console.log(req.method, req.baseUrl, req.body)
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
    })
    res.json(response);
  } catch {
    console.error(error);
    res.status(500).send('Error en la solicitud a Notion');
  }
})

app.post('/tollfreeVerification', async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/tollFreeVerification`, {
      method: 'post',
      body: req.body,
      headers: {
        'Content-Type': 'application/json'
      },
    })
    resJson = await response.json()

    res.json(resJson);

  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
