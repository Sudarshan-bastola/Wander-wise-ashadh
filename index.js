
import express from 'express';

import connectDB from './config/database.js';

import HANDLERS from './handlers/index.js';

import errorMiddleware from './middlewares/error.js';

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use("/",HANDLERS);
app.use(errorMiddleware);
// app.get("/", (req, res) => {
    
//     res.send("Hello World");
// });

app.listen(PORT, () => {

console.log("Server is running on port " + PORT);

});