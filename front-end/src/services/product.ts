import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'

export async function getProducts () {
console.log(db)
const productCollection = collection(db, 'Products')
const response = await getDocs(productCollection)
console.log(response)
const products = response.docs.map(doc => doc.data());
console.log(products)
return products
}