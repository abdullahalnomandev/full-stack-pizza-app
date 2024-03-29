import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is required'],
        maxlength:[60,'Title should be within 60 characters'],
    },
    desc:{
        type:String,
        required:[true,'Description is required'], 
        maxlength:[60,'Description should be within 60 characters'],
    },
    img:{
        type:String,
        required:[true,'Please upload a picture'], 
    },
    prices:{
        type:[Number],
        required:[true,'Price is required'],
    },
    extraOption:{
       type:[{
         text:{type:String,required:true},
         price:{type:Number,required:true}
       }]
    },
    
},{timestamps:true}
)


// export default mongoose.model.Product || mongoose.model('Product',ProductSchema)
 const Product=  mongoose.models.Product || mongoose.model('Product',ProductSchema)
 export default Product;





