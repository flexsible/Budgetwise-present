import React from 'react'
import { Link } from 'react-router-dom'

export default function TombolNext () {
  return (
    <Link to={'/budgets'}>
        <button className="my-6 block font-bold text-white rounded-lg px-6 py-3 bg-[#EE946B]">Next</button>
    </Link>
  )
}
