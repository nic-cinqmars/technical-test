import express from 'express';
import cors from 'cors';
import { getServerPort } from "./config/config";
import todoRoutes from "./routes/todoRoutes";

const server = express();

server.use(cors());
server.use(express.json());

// Routes
server.use('/api/todos', todoRoutes);

const port = getServerPort();
server.listen(port, () => {
    console.log(`Server running on port [${port}]`);
});