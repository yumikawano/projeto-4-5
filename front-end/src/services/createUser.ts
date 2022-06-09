import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { User } from "../entities/User"
import { auth, db } from "./firebase"

type NewUserInput = {
  name: string
  lastname: string
  email: string
  password: string
  phone: string
}

export const createUser = async ({ email, password, name, lastname, phone }: NewUserInput): Promise<User> => {
  const result = await createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(db, 'users', result.user.uid), {
    name,
    lastname,
    email,
    phone
  })
  return {
    id: result.user.uid,
    name,
    lastname,
    email,
    phone
  }
}