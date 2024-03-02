require("dotenv").config()
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
require("./Db/connectDb.js");

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ],
        credentials: true,
        preflightContinue: false,
	}
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

//Routers

const UserRouter = require("./Router/User.router.js")
app.use('/user',UserRouter);







// video Calling

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
