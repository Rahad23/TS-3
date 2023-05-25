import { HydratedDocument, Model } from "mongoose";


export interface booksData{
    title: string;
    author:string[],
    genre:string,
    publicationYear:number,
    publisher:{
        name:string,
        location:string,
    },
    reviews:object[];
    rating:number;
    price:string;
}

export interface userMethods {
    fullName(): string;
  }


export interface UserModels extends Model<booksData, {}, userMethods> {
    getAdminUsers(): Promise<HydratedDocument<booksData, userMethods>>;
  }