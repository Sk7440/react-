import React, { useContext } from 'react'
import Quizquestions from './components/Quizquestions'
import Renderquestions from './components/Renderquestions'
import Loader from './components/Loader'
import { quizContext } from './components/Context'

function App() {
  const {  loading, waiting } = useContext(quizContext)

  return (
    <>
    {
      waiting ? <Quizquestions />:

      loading ? <Loader />:
      <Renderquestions />
      }


      
    </>
  )
}

export default App