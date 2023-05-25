import bookModel from "./model";



const getBookCollectionData= async()=>{
    const bookName = await bookModel.find({});
    return bookName;
}


export {
    getBookCollectionData,
}