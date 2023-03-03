const express=require('express')
const shop=express.Router();

shop.get('/', (req, res, next) => {
    console.log('in the next middleware');
    res.send('<h3>Hi Shivanand!</h3>')
})

module.exports=shop;
