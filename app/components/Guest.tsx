import { Dispatch, SetStateAction } from 'react'
import { CntGuests, DispGuests } from '../types/stay'
import Counter from './Counter'

type Props = {
  cntAdults: CntGuests
  setCntAdults: Dispatch<SetStateAction<CntGuests>>
  cntChildren: CntGuests
  setCntChildren: Dispatch<SetStateAction<CntGuests>>
  dispGuests: DispGuests
  isInputFocus: boolean
  setIsInputFocus: Dispatch<SetStateAction<boolean>>
}

const Guest: React.FC<Props> = ({
  cntAdults,
  setCntAdults,
  cntChildren,
  setCntChildren,
  dispGuests,
  isInputFocus,
  setIsInputFocus,
}) => {
  return (
    <div className="w-full h-auto ">
      <div className="h-14 relative">
        <input
          type="text"
          readOnly={true}
          placeholder="Add guests"
          className="border border-gray-300 pl-5 w-full h-full rounded-2xl focus:outline-none focus:border-blue-700"
          value={dispGuests}
          onFocus={() => setIsInputFocus(true)}
        />
      </div>
      {isInputFocus && (
        <div className="">
          <Counter
            title="Adults"
            description="Ages 13 or above"
            cnt={cntAdults}
            setCnt={setCntAdults}
          />
          <Counter
            title="Children"
            description="Ages 2-12"
            cnt={cntChildren}
            setCnt={setCntChildren}
          />
        </div>
      )}
    </div>
  )
}

export default Guest
