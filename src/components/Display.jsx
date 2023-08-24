import React from 'react'

function Display(props) {
  return (
    <div className=" mt-4 text-white font-bold text-6xl ">
        {props.message}
    </div>
  )
}

export default Display