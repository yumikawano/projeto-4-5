import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { User } from "../entities/User"
import { auth, db } from "./firebase"

type NewUserInput = {
  name: string
  email: string
  password: string
  phone: string
  address: string
}

export const createUser = async ({ email, password, name, phone, address }: NewUserInput): Promise<User> => {
  const result = await createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(db, 'User', result.user.uid), {
    name,
    email,
    phone,
    address
  })
  return {
    id: result.user.uid,
    name,
    email,
    phone,
    address
  }
}