import {
  collection,
  where,
  getDocs,
  query as DBQuery,
} from "firebase/firestore"
import { db } from "./firebase"

export const getMabuFromQuery = async (
  query: Partial<{
    [key: string]: string | string[]
  }>
) => {
  const mabuRef = collection(db, "mabu")
  const queryArray = Object.entries(query).map(([key, value]) =>
    where(key, "==", value)
  )
  const getOnlyCard = DBQuery.apply(null, [mabuRef, ...queryArray])
  const mabuSnapshot = await getDocs(getOnlyCard)
  return mabuSnapshot.docs.map((doc) => doc.data())
}
