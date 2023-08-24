import React from 'react'

function Minus(props) {
  return (
    <div>
        <button onClick={() => props.onClickFunctionMinus(props.decrease)} className=" drop-shadow-md bg-red-600 px-3 py-1 text-white font-bold rounded-md">
            -{props.decrease}
        </button>
    </div>
  )
}

export default Minus