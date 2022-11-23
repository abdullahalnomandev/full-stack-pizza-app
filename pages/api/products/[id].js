
import Product from '../../../models/Product';
import dbConnect from './../../../lib/dbConnect';

const products = async (req,res)=>{
    const {method,query:{id}}= req;
    await dbConnect();
    
    // GET SINGLE_PRODUCT
    if(method=="GET"){
        try {

            const product = await Product.findById(id);
               res.status(200).json({
                status: 'success',
                product
               });
            
        } catch (error) {
            res.status(500).json(error?.response?.data)
        }
    }


    // PUT SINGLE PRODUCTS
    if(method=="PUT"){  
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

        // PUT SINGLE PRODUCTS
        if(method=="DELETE"){  
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