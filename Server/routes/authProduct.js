// const express=require('express');
// // const jwt=require('jsonwebtoken')
// const router=express.Router();
// const Product=require('../models/product')



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// app.use(bodyParser.json());

// // API to add a product
// router.post('/products', upload.single('image'), (req, res) => {
//     const { pname, pdescription, price, category, stock } = req.body;
//     const imagePath = req.file ? req.file.path : null;

//     const newProduct = new Product({
//         pname,
//         pdescription,
//         price,
//         category,
//         image: imagePath,
//         stock
//     });

//     newProduct.save()
//         .then(product => res.json(product))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports=router