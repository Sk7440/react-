import React, { useState } from 'react'
import { useContext } from 'react'
import { quizContext } from './Context'
import Loader from './Loader'
function Renderquestions() {
  const { showQuestions, loading, waiting } = useContext(quizContext)
  const [index, setIndex] = useState(0)
  const { category, question, correct_answer, incorrect_answers } = showQuestions?.results[index]
  incorrect_answers.splice(index, 0, correct_answer)
  let totalAnswer = incorrect_answers
  return (

    <>
      {/* 
slice 
array  method return copy of array 
used in pagenation
splice
 update original array on the basis give condition also can delete the element  */}
      <div>

        <h1>{category}</h1>
        <h3>{question}</h3>
        {totalAnswer.map((ele) => {
          return (

            <h4>{ele}</h4>
          )
        })}
        <button>Submit</button>

      </div>

    </>


  )
}
export default Renderquestions