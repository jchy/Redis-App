const axios = require('axios');
const express = require('express');
const client = require('../config/redis.js');
const router = express.Router();

router.get('/:username',async(req,res)=>{
try{
    const username = req.params.username || "jchy";
    console.log(username);
//github
const data = await client.get(`${username}_github`);
    if(data){
        return res.status(201).send(JSON.parse(data));
    }
    const url = `https://api.github.com/users/${username}`;
    axios.get(url).then((response)=>{
        console.log(response);
        client.set(`${username}_github`,JSON.stringify(response.data));
        return res.status(200).send(response.data);
    })
.catch((err)=>{
    console.error(err);
    return res.status(500).send("error");
});
}
catch(err){}
})

module.exports = router;