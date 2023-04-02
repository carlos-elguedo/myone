import express from 'express';
import morgan from "morgan";
import cors from "cors";
import http from 'http';
import { Server } from 'socket.io';
import { authenticateToken } from './auth'
import authRoutes from './routes/auth.routes';

import { corsOptions, PORT } from "./config";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());



app.get('/', (req, res) => {
  res.send('MyOne is running');
});

// Routes
app.use("/", authRoutes);

app.get('/private', authenticateToken, (req, res) => {
  res.send('This is a private API');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
