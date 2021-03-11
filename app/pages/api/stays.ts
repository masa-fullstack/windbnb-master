import { NextApiRequest, NextApiResponse } from 'next'
import staysData from '../../data/stays.json'

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const {
    query: { location, cntGuests },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(
        staysData.filter((stay) => {
          return (
            (!location[0] ||
              (stay.city === location[0] && stay.country === location[1])) &&
            stay.maxGuests >= Number(cntGuests ? cntGuests : 0)
          )
        })
      )
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
