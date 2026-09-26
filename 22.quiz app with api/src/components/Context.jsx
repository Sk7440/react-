import React, { createContext, useState } from 'react'
export const quizContext = createContext()
function Context({children}) {
    const [quiz,setQuiz] = useState({
        quantity:10,
        difficulty:"easy",
        category:"sports"
    })
  return (
    <quizContext.Provider value={{ quiz, setQuiz }}>
      {children}
    </quizContext.Provider>
  )
}

export default Context