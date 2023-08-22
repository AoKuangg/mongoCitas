import { connDB } from "../../../db/connectDB.js";

export const getAllUsers = async()=>{
    let db = await connDB();
    let collection = db.collection('users');
    let data = await collection.find().toArray();
    return data;
};

export const getUserById = async(userID)=>{
    let db = await connDB();
    let collection = db.collection('users');
    let data = await collection.find({ID:Number(userID)}).toArray();
    return data;
};

export const createUser = async(NewUser)=>{
    let db = await connDB();
    let collection = db.collection('users');
    let data = await collection.insertOne(NewUser);
    return data;
};