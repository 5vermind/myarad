import { getDocs, collection, query, where } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { db } from "src/lib/firebase"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { itemId } = req.query
  const mabuRef = collection(db, "mabu")
  const mabuQuery = query(mabuRef, where("itemId", "==", itemId))
  const mabuSnapshot = await getDocs(mabuQuery)
  const item = mabuSnapshot.docs[0].data()
  res.status(200).json(item)
}
