import { homeContext } from './ContextAPi';
import { eact } from "react"
function Footer() {
  const { setCount } = useContext(homeContext)

  return (
    <>
      <h1 className='text-4xl flex justify-center m-10'>
        This is footer

      </h1>
      <div className="flex items-center justify-center gap-5 p-6">
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95"
        >
          decrement
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev * 0);
          }}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95"
        >
          reset
        </button>
      </div>
    </>
  )
}

export default Footer