import { db, collectionsName } from ".";
import { getDocs, collection, query, where, getDoc, doc} from "firebase/firestore";


export const getProducts = (categoryId) =>{
    return new Promise((resolve, reject) => {

        const collectionRef = categoryId
            ? query(collection(db, collectionsName.products), where('category', '==', categoryId))
            : collection(db, collectionsName.products)

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

export const getProductsId = (productId) =>{
    return new Promise((resolve, reject) => {
        getDoc(doc(db, collectionsName.products, productId)).then(response => {
            const producto = {id: response.id, ...response.data()}
            resolve(producto)
        }).catch(error => {
            reject(error);
        })
    })
}
