require('dotenv').config()

const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.ACCESS_TOKEN
);

//FEATURED ENDPOINT
app.get("/featured", (req, res) => {
    client.request({
        method: 'GET',
        path: '/me/projects/7511926/videos?fields=name,uri,pictures.sizes.link',
    }, function (error, body, status_code, headers) {
        if (error) {
            console.log(error)
        }
        res.send(body.data)
    });
});

//COMMERCIALS ENDPOINTS
app.get("/commercials", (req, res) => {
    client.request({
        method: 'GET',
        path: '/me/projects/7511929/videos?fields=name,uri,description,pictures.sizes.link',
    }, function (error, body, status_code, headers) {
        if (error) {
            console.log(error)
        }
        res.send(body.data)
    });
});

//FICTION ENDPOINT
app.get("/fiction", (req, res) => {
    client.request({
        method: 'GET',
        path: '/me/projects/7511934/videos?fields=name,uri,description,pictures.sizes.link',
    }, function (error, body, status_code, headers) {
        if (error) {
            console.log(error)
        }
        res.send(body.data)
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});
