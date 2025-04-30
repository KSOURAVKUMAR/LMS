import mongoose from "mongoose";

const connectDB = async () =>{
    const DB_URL=process.env.DB_URL
    const DB_NAME=process.env.DB_NAME
    try{
        await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log("Database Connected")
    }
    catch(err){
        // console.log("Error connecting to database")
        throw err;
    }
}
export default connectDB