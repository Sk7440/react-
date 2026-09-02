import  { useContext } from 'react'
import { homeContext } from './ContextAPi'
function Home() {
  const { count } = useContext(homeContext)
  return (
    <>
    <h1 className='text-4xl flex justify-center m-10'>
    This is home

    </h1>
  <div className="text-4xl flex justify-center font-bold tracking-tight text-gray-900">
  {count}
</div>
    </>
  )
}

export default Home