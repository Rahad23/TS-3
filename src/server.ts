import mongoose from "mongoose";
import app from "./app";
const port:number = 5000;
// data base connections
main().catch(err => console.log(err));

async function main(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/BookData');
        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
          })
    }catch(err){
        console.log("Field to database connection", err)
    }
}