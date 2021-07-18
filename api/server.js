require('dotenv').config();
const express = require('express');
const server = express();
const Games = require('../games/gameModel');

server.use(express.json());

server.get('/',(req,res)=>{
    res.status(200).json({api:'up'});
});

server.get('/games',(req,res)=>{
    Games.getAll()
    .then(games =>{
        res.status(200).json(games);
    })
    .catch(error =>{
        res.status(500).json(error);
    });
});


module.exports = server