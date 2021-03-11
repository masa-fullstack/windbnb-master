import { Stay } from '../types/stay'

type Props = {
  stay: Stay
}

const Card: React.FC<Props> = ({ stay }) => {
  return (
    <div>
      <div className="w-full pb-52 relative">
        <img
          className="rounded-xl object-cover absolute w-full h-full"
          src={stay.photo}
        />
      </div>
      <div className="flex justify-between items-center my-3">
        {stay.superHost && (
          <div className="border border-gray-700 rounded-xl py-1 px-2 text-xs text-gray-500 font-medium">
            SUPER HOST
          </div>
        )}
        <div className="text-sm text-gray-400 font-extralight align-middle py-1">
          {stay.type}
        </div>
        <div className="flex items-center">
          <span className="material-icons text-xl text-yellow-500">grade</span>
          <span className="text-sm text-gray-500">
            {stay.rating.toFixed(2)}
          </span>
        </div>
      </div>
      <div>{stay.title}</div>
    </div>
  )
}

export default Card
