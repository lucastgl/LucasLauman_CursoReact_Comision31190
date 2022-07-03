import { db, collectionsName } from ".";
import { getDocs, collection, query, where, getDoc, doc, /*addDoc, documentId, writeBatch*/ } from "firebase/firestore";


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

// export const generateOrder = (totalCompra, buyer, navigate, cart, cleanCart) =>{

//     const objOrder = {
//         buyer,
//         items: cart,
//         total: totalCompra
//     }

//     const ids = cart.map(prod => prod.id)

//     const batch = writeBatch(db);
//     const outOfStock = [];
//     const collectionRef2 = collection(db, collectionsName.products)
//     getDocs(query(collectionRef2, where(documentId(), 'in', ids)))
//         .then(response =>{
//             response.docs.forEach(doc =>{
//                 const dataDoc = doc.data();
//                 const prodQuantity = cart.find(prod => prod.id === doc.id)?.cantidad

//                 if(dataDoc.stock >= prodQuantity){
//                     batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
//                 }else{
//                      outOfStock.push({id: doc.id, ...dataDoc})
//                 }
//             })
//             }).then(()=>{
//             if(outOfStock.length === 0){
//                 const collectionRef = collection(db, collectionsName.orders);
//                 return addDoc(collectionRef, objOrder)
//             }else{
//                 return Promise.reject({type: 'out_of_stock', products: outOfStock})
//             }
//         }).then(({id}) =>{
//             batch.commit();
//             console.log(`se creó la orden con el id: ${id}`);
//             cleanCart();
//             navigate('/')
//         }).catch(error =>{
//             console.log(error);
//         })

// }