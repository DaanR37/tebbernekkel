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

//FICTION ENDPOINT ///WILL BE REMOVED
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

///HERE MUST COME DIFFERENT ENDPOINTS FOR EVERY SINGLE CREATIVE IN THE LIST - FICTION WILL BE REMOVED 

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
