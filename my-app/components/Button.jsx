import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='mainBtn py-4 px-8 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'> {props.children} </button>
    </div>
  )
}

export default Button