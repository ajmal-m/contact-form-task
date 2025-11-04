import { db } from "./firebase";

import { collection, addDoc } from "firebase/firestore";

type FormType = {
    name:string;
    email:string;
    message: string;
}


export const addData = async ({ name , email, message} :FormType ) => {
    await addDoc(collection(db, "formData"), {
      name,
      email,
      message,
      createdAt: new Date()
    });
}