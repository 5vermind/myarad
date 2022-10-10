import { collection, getDocs, query, where } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { db } from "src/lib/firebase"

export default async function getMabu(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { grade } = req.query
  const mabuRef = collection(db, "mabu")
  const getOnlyCard = query(
    mabuRef,
    where("itemTypeDetail", "==", "전문직업 재료"),
    where("grade", "==", grade)
  )
  const mabuSnapshot = await getDocs(getOnlyCard)
  const mabu = mabuSnapshot.docs.map((doc) => doc.data())
  res.status(200).json(mabu)
}
