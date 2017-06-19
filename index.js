const port = 1234;
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

io.on('connection', (socket) => console.log('a user connected'));

http.listen(port, () => console.log(`listening on port ${port}`));

