import { Dispatch, SetStateAction } from 'react'
import Select from 'react-select'
import { useStay } from '../lib/useStay'
import { initialLocation } from '../pages'
import { StaysData, Location } from '../types/stay'

type Props = {
  location: Location
  setLocation: Dispatch<SetStateAction<Location>>
}
type GetUniqueOptions = (options: StaysData) => StaysData
type FormatOptionLabel = (location: Location) => JSX.Element

const SelectLocation: React.FC<Props> = ({ location, setLocation }) => {
  const { stays, isLoading, error } = useStay()

  // 重複を排除する
  const getUniqueOptions: GetUniqueOptions = (options) =>
    options.filter(
      (element, index, self) =>
        self.findIndex(
          (e) => e.city === element.city && e.country === element.country
        ) === index
    )

  // 選択肢の整形表示
  const formatOptionLabel: FormatOptionLabel = (location) => (
    <div className="flex">
      <span className="material-icons">room</span>
      <div>
        {location.city}, {location.country}
      </div>
    </div>
  )

  //react-selectのスタイリング
  const customStyles = {
    control: (styles) => ({
      ...styles,
      height: '56px',
      'padding-left': '15px',
      'border-radius': '15px',
    }),
  }
  if (error)
    return (
      <div className="text-3xl text-red-500 mb-10">{`データ取得でエラーが発生しました。エラー内容：${error}`}</div>
    )
  if (isLoading) return <div>loading...</div>
  return (
    <div className="w-full h-14 relative">
      <span className="absolute top-2 left-5 text-xxs">location</span>
      <Select
        styles={customStyles}
        options={getUniqueOptions(stays)}
        formatOptionLabel={formatOptionLabel}
        getOptionValue={(option) => option['city'] + option['country']}
        placeholder="Add location"
        isClearable={true}
        isLoading={isLoading}
        onChange={(e) => {
          if (e) {
            setLocation(e)
          } else {
            setLocation(initialLocation)
          }
        }}
        defaultValue={location.city ? location : null}
      />
    </div>
  )
}

export default SelectLocation
