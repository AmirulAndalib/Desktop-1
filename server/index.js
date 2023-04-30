const express = require("express");
const app = express();
const port = 3000;

const config = {
	"categories": ["movies", "series", "anime"]
};

app.get("/", (req, res) => {
	res.send(config);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
