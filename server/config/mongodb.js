//here we connect DB with server

import mongoose from "mongoose"

const connectDB =async ()=>{

    mongoose.connection.on(`connected`,()=>console.log("DataBase Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
}
export  default connectDB;