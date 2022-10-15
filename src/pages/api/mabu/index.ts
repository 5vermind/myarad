import { NextApiRequest, NextApiResponse } from "next"
import { getMabuFromQuery } from "src/lib/mabu"

export default async function getMabu(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mabu = await getMabuFromQuery(req.query)
  res.status(200).json(mabu)
}
