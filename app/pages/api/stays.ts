import { NextApiRequest, NextApiResponse } from 'next'
import staysData from './stays.json'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(staysData)
}

export default handler
