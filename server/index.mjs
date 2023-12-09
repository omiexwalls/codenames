import fs from "fs";
import path from "path";
import {createRequestHandler} from "@remix-run/express";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import {createServer} from "http";
import { Server } from 'socket.io';
import * as build from "../build/index.js";
const MODE = process.env.NODE_ENV;
const BUILD_DIR = path.join(process.cwd(), 'server/build');

if (!fs.existsSync(BUILD_DIR)) {
  console.warn(
    "Build directory doesn't exist, please run `npm run dev` or `npm run build` before starting the server.",
  );
}

const app = express();

// You need to create the HTTP server from the Express app
const httpServer = createServer(app);

// And then attach the socket.io server to the HTTP server
const io = new Server(httpServer);

// Then you can use `io` to listen the `connection` event and get a socket
// from a client
io.on('connection', (socket) => {
  // from this point you are on the WS connection with a specific client
  console.log(socket.id, 'connected');

  socket.emit('confirmation', 'connected!');

  socket.on('event', (data) => {
    console.log(socket.id, data);
    socket.emit('event', 'pong');
  });
});

app.use(compression());

// You may want to be more aggressive with this caching
app.use(express.static('public', { maxAge: '1h' }));

// Remix fingerprints its assets so we can cache forever
app.use(express.static('public/build', { immutable: true, maxAge: '1y' }));

app.use(morgan('tiny'));
app.all(
  '*',
  MODE === 'production'
    ? createRequestHandler({ build: require('../build') })
    : (req, res, next) => {
          return createRequestHandler({ build, mode: MODE })(req, res, next);
      },
);

const port = process.env.PORT || 3000;

// instead of running listen on the Express app, do it on the HTTP server
httpServer.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

