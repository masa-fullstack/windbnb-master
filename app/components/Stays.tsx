import Card from '../components/Card'
import { useStay } from '../lib/useStay'
import { CntGuests, Location } from '../types/stay'

type Props = {
  location: Location
  cntGuests: CntGuests
}

const Stays: React.FC<Props> = ({ location, cntGuests }) => {
  const { stays, isLoading, error } = useStay(location, cntGuests)

  if (error)
    return (
      <div className="text-3xl text-red-500 mb-10">{`データ取得でエラーが発生しました。エラー内容： ${error}`}</div>
    )
  if (isLoading) return <div>loading...</div>
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {stays.map((stay, idx) => (
        <Card key={idx} stay={stay} />
      ))}
    </div>
  )
}

export default Stays
