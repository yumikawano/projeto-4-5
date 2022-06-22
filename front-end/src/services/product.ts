import { collection, getDocs, getDoc, doc } from "firebase/firestore"
import { product } from "../entities/Products"
import { db } from "./firebase"



export const getProducts = async ():Promise<product[]> => {
    const doc = collection(db, 'Products')
    const products = await getDocs(doc)
    const productsSnapshot = products.docs.map(doc => ({...doc.data(),id:doc.id}))
    return productsSnapshot as product[]   
}

export const getProductsById = async (id:string):Promise<product> => {
    const docProduct = doc(db, 'Products', id)
    const productSnapshot = await getDoc(docProduct)
    if (!productSnapshot.exists()) {
        throw new Error('Produto não encontrado.')
    }
    const product = productSnapshot.data()
    return {id, ...product} as product
}