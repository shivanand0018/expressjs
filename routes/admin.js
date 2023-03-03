const express=require('express');

const router=express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('Add product');
    res.send('<html><body><form action="/admin/product" method="POST" ><input type="text" name="product"/><button type="submit">Submit</button></form></body></html')
})
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop')
})

module.exports=router;