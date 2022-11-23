
import Product from '../../../models/Product';
import dbConnect from './../../../lib/dbConnect';

const products = async (req,res)=>{
    const {method}= req;
     dbConnect();
    
    // GET ALL PRODUCTS
    if(method=="GET"){
        try {

            const products = await Product.find({});
               res.status(200).json({
                status: 'success',
                result:products.length,
                products
               });
            
        } catch (error) {
            res.status(500).json(error)
        }
    }


    // POST SINGLE PRODUCTS
    if(method=="POST"){  
        console.log(req.body);
        try {
            const createSingleProduct = await Product.create(req.body);
            res.status(201).json({
                status: "success",
                product:createSingleProduct
            })
             
        } catch (error) {
            res.status(500).json(error)
        }
    }

}


export default products;