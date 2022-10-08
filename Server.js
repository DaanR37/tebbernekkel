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

///HOMEPAGE ENDPOINT
app.get("/homepage", (req, res) => {
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

///FEATURED (COMMERCIALS) ENDPOINTS
app.get("/featured", (req, res) => {
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

///ACHMED ENDPOINT
app.get("/fictionachmed", (req, res) => {
    client.request({
        method: 'GET',
        path: '/me/projects/12880998/videos?fields=name,uri,description,pictures.sizes.link',
    }, function (error, body, status_code, headers) {
        if (error) {
            console.log(error)
        }
        res.send(body.data)
    });
});
///BLUE ENDPOINT
app.get("/fictionblue", (req, res) => {
    client.request({
        method: 'GET',
        path: '/me/projects/12885045/videos?fields=name,uri,description,pictures.sizes.link',
    }, function (error, body, status_code, headers) {
        if (error) {
            console.log(error)
        }
        res.send(body.data)
    });
});
///FOLKERT ENDPOINT
app.get("/fictionfolkert", (req, res) => {
    client.request({
        method: 'GET',
        path: '/me/projects/12885057/videos?fields=name,uri,description,pictures.sizes.link',
    }, function (error, body, status_code, headers) {
        if (error) {
            console.log(error)
        }
        res.send(body.data)
    });
});
///JOOSJE ENDPOINT
app.get("/fictionjoosje", (req, res) => {
    client.request({
        method: 'GET',
        path: '/me/projects/12885062/videos?fields=name,uri,description,pictures.sizes.link',
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
