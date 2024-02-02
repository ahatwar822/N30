const { Router } = require('express')
const router = Router();

products = [
    {
        id: 1,
        name: "sharts",
        price:1000
    },
    {
        id: 2,
        name: "shoes",
        price:2200
    },
    {
        id: 3,
        name: "pants",
        price:2200
    }
];

router.get('/',(req,res) => {
    res.cookie("token","test",{maxAge: 5000});
    res.send(products)
});

router.get('/:id',(req,res) => {
    const id = req.params.id;
    product = products.find((p)=> p.price == id);
    res.send(product);
});

module.exports = router