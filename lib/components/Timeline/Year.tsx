import React from 'react'

type YearType = {
  year: string
  events: string[]
}

const Year: React.FC<YearType> = ({ year, events }) => {
  return (
    <div className="py-16 w-3/4">
      <h2 className="text-4xl text-center pb-4">{year}</h2>
      <ul className="list-disc ">
        {events.map((event) => (
          <li className="pb-2">{event}</li>
        ))}
      </ul>
    </div>
  )
}

export default Year
