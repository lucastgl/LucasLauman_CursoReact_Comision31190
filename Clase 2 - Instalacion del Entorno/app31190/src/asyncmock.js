//Este archivo simula la respuesta de una appi (UNA APPI RETORAN UN JASON)

//array de objetos
const products = [
    { 
        id: '1',
        origen: 'USA', 
        name: 'Joggin Black Sport',
        material: 'Frisa', 
        price: 5000, 
        category: 'Joggers', 
        img:'https://d26lpennugtm8s.cloudfront.net/stores/001/210/943/products/ac55265e-e98a-4786-abb7-220b96e96559_nube-1a7fe8a35e923efbf215920904316631-1024-1024.jpg', 
        stock: 25, 
        description:'Jogger Adidas Negro c/ tiras blancas'
    },
    { id: '2',origen: 'USA', name: 'Hoodie Cat Samurai',material: 'Algodón', price: 3000, category: 'Hodies', img:'https://www.dhresource.com/f2/albu/g9/M00/3A/90/rBVaVV5Tge2AJoLHAAGpJ_vFyXI509.jpg', stock: 16, description:'Hoodie Negro c/ gato Samurai'},
    { id: '3',origen: 'USA', name: 'Adidas Prosphere B/W',material: 'Suela de plástico recilado con tela impermeable', price: 12000, category: 'Sneakers', img:'https://i.pinimg.com/originals/26/a5/d7/26a5d7d7aad41344fe4f374f0da10b08.jpg', stock: 10, description:'Adidas Prosphere B&W'}
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{ //simulo que la appi funciona mal y tarda 2 segundos en devolver el dato
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })

}

export const getProductsCategory = (categoryId) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}