import React, { useContext } from 'react'
import { quizContext } from './Context.jsx'
function Quizquestions() {
  const { quiz, setQuiz, setWaiting, setLoading, setShowQuestions } = useContext(quizContext)
  async function FetchQuestions(url) {
    console.log(url);

    try {
      setWaiting(false)
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setShowQuestions(data)

      if (!response.ok) {
        throw new Error(` status: ${response.status}`);
      }

    }
    catch (error) {
      console.log(error);

    }
    finally {
      setLoading(false);

    }

  }

  const table = {
    sports: 21,
    history: 23,
    politics: 24,
  }
  function handleSubmit(e) {


    e.preventDefault()
    const { quantity, difficulty, category } = quiz
    console.log(quantity, difficulty, category);
    const API_ENDPOINT = 'https://opentdb.com/api.php?'

    const url = `${API_ENDPOINT}amount=${quantity}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
    console.log(url);

    FetchQuestions(url)

  }
  function change(e) {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value
    })



  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form
        action=""
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-md border border-gray-200 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Quiz Questions
        </h1>

        <h3 className="text-sm font-semibold text-gray-700 -mb-2">
          Number of Questions
        </h3>
        <input
          value={quiz.quantity}
          onChange={(e) => { change(e) }}
          type="text"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

        <h3 className="text-sm font-semibold text-gray-700 -mb-2">
          Difficulty
        </h3>
        <select
          onChange={(e) => { change(e) }}
          name="difficulty"
          id=""
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          <option value={'easy'}>easy</option>
          <option value={"medium"}>medium</option>
          <option value={"hard"}>hard</option>
        </select>

        <h3 className="text-sm font-semibold text-gray-700 -mb-2">
          Category
        </h3>
        <select
          onChange={(e) => { change(e) }}
          name="category"
          id=""
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          <option value={"sports"}>sports</option>
          <option value={"history"}>history</option>
          <option value={"politics"}>politics</option>
        </select>

        <button
          onClick={(e) => { handleSubmit(e) }}
          type="submit"
          className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Quizquestions