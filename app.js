import express from 'express';
import inputRoutes from './routes/inputRoutes.js';
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

app.use('/', inputRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
