import React from 'react'
const Counter = ({ title, description, cnt, setCnt }) => {
  return (
    <div className="mt-10">
      <div className="text-sm">{title}</div>
      <div className="text-sm text-gray-300">{description}</div>
      <div className="flex mt-3">
        <button
          className="border border-gray-400 rounded w-7"
          onClick={() => {
            if (cnt !== 0) {
              setCnt(cnt - 1)
            }
          }}
        >
          -
        </button>
        <div className="mx-5">{cnt}</div>
        <button
          className="border border-gray-400 rounded w-7"
          onClick={() => {
            setCnt(cnt + 1)
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default React.memo(Counter)
