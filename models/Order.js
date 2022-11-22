import mongoose from 'mongoose';


const OrderSchema = new mongoose.Schema({
    customer:{
        type:String,
        required:[true,'Customer Name is required'], 
        maxlength:[60,'Customer should be within 60 characters'],
    },
    address:{
        type:String,
        required:[true,'Address is required'], 
        maxlength:[200,'Address must be within 200 characters'],
    },
    total:{
        type:Number,
        required:[true,'Total is required'],
    },
    status:{
        type:Number,
        default:0
    },
    method:{
        type:Number,
       required:[true,'Method is required']
    },
    
   
    
},{timestamps:true}
)


export default mongoose.model.Order || mongoose.model('Order',OrderSchema)

















