
import Product from '../../../models/Product';
import dbConnect from './../../../lib/dbConnect';

const products = async (req,res)=>{
    const {method}= req;
    await dbConnect();
    
    if(method=="GET"){
    }

    if(method=="POST"){  
        console.log(req.body);
        try {
            const createSingleProduct = await Product.create(req.body);
            res.status(201).json({
                status: "success",
                product:createSingleProduct
            })
             
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }



  
    

}


export default products;