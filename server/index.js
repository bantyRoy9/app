import express from 'express'
import Router from './router/router.js'
import DbConnection from './database/db.js'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express();
app.use(cors());
app.use(bodyParser.json({ extended : true}));
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/',Router)

const PORT = 8000;

app.listen( PORT, () => console.log(`server is running on ${PORT}`));
DbConnection();