import { collection, getDocs, doc } from 'firebase/firestore/lite';
import { db } from './firebase'

export async function getProducts () {
console.log(db)
const productCollection = collection(db, 'products')
const response = await getDocs(productCollection)
console.log(response)
const products = response.docs.map(doc => doc.data());
console.log(products)
return products
}