const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static('dist/nd.frontend.client'));

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('*', (req, res) => {
    res.sendFile('dist/nd.frontend.client/index.html', { root: '.' });
});