import { Request, Response } from "express";
import { getBookCollectionData } from "./service";



const getBooks= async(req:Request, res:Response)=>{
        const booksNams = await getBookCollectionData();
      
        res.status(200).json({
            status: "succuss",
            data: booksNams
           }) 
}

export {
    getBooks,
}