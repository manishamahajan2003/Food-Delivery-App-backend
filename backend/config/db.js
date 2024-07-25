import mongoose from "mongoose";


 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greetStack:Manisha2003@cluster0.pq605n7.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}






