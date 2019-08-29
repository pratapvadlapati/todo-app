var Products = require('../models/product');


exports.ProductsList = function(req, res, next){
  //  res.send('Product List yet to implement');
  Products.find()
  .exec(function(err, list){
      if(err){
          console.log(err)
          res.send('unable to serve at this moment!');
      }
      res.send(list);
  })
}



exports.addProduct = function(req, res, next){
    var Product = new Products({
        "product_id": 234,
        "title": req.body.title,
        "description": req.body.description,
        "price": req.body.price,
        "image": req.body.image
       });
    
     
         //add the product to list
        Product.save(function(err, product){
            if(product){
                res.send(product);
            }
            console.log(err);
        })
}

