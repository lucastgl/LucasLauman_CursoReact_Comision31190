import { db } from ".";
import { getDocs, collection, query, where } from "firebase/firestore";

export const getProducts = (categoryId) =>{
    return new Promise((resolve, reject) => {

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

            getDocs(collectionRef).then(response => {
                const productos = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                resolve(productos)
            }).catch(error => {
                reject(error);
            })
    })
}