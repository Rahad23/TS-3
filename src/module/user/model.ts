import { Schema, model } from "mongoose";
import { UserModels, booksData } from "./interface";

const userDataScema= new Schema<booksData>({
    title: {type:String, required:true},
    author: {type:[{type:String, required:true}], required:true},
    genre:{type:String, required:true},
    publicationYear:{type:Number, required:true},
    publisher:{
        name:{type:String, required:true},
        location:{type:String, required:true},
    },
    reviews:{type:[{
        user:{type:String, required:true},
        comment:{type:String, required:true},
    }], required:true},
    rating:{type:Number, required:true},
    price:{type:String, required:true},
})

userDataScema.static("getBook", async function getTitle(){
    const title:string = await this.find({role: "title"});
    return title;
})

const bookModel = model<booksData, UserModels>("User", userDataScema);

export default bookModel;