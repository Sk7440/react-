import React, { createContext, useState } from 'react'
export const quizContext = createContext()
function Context({children}) {
    const [quiz,setQuiz] = useState({
        quantity:10,
        difficulty:"easy",
        category:"sports"
    })
    const [waiting, setWaiting] = useState(true)
    const [loading, setLoading] = useState(false)
    const [showQuestions, setShowQuestions] = useState([])
  return (
    <quizContext.Provider value={{ quiz, setQuiz,loading, setLoading,waiting, setWaiting,showQuestions, setShowQuestions }}>
      {children}
    </quizContext.Provider>
  )
}

export default Context