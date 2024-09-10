import mongoose from "mongoose";
export function dbConnection(){
    mongoose.connect("mongodb://127.0.0.1:27017/stickyNotes").then(()=>{
        console.log("database connected successfully");
    }).catch((err)=>{
        console.log("database connection failed");
        
    })
}