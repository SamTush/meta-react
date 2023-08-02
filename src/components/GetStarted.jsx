function GetStarted(props) {

  // const clicking = () => {
  //   setCounter(counter * 2)
  // }

  return (
    <div className=" mt-24 ">
      <button onClick={() => props.onClickFunction(props.increment)} className='px-3 py-1 bg-red-600 text-white font-bold rounded-md '>
        +{props.increment}
      </button>
    </div>
  )
}

export default GetStarted