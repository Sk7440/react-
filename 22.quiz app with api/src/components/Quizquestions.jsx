import React, { useContext } from 'react'
import { quizContext } from './Context.jsx'
function Quizquestions() {
    const { quiz, setQuiz } = useContext(quizContext)
    async function FetchQuestions(url) {
        try {




        }
        catch (error) {
            console.log(error);

        }
        finally {
            console.log("khbsdkcj;f");

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
        FetchQuestions(url)
    }
    return (
        <div>
            <form action="">
                <h1>Quiz Questions</h1>
                <h3>Number of Questions</h3>
               <input type="text" />
                <h3>Difficulty</h3>
                <select name="difficulty" id="">
                    <option value={quiz.difficulty}>{quiz.difficulty}</option>
                </select>
                <h3>Category</h3>
                <select name="category" id="">
                    <option value={quiz.category}>{quiz.category}</option>
                </select>
                <button onClick={(e) => { handleSubmit(e) }} type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Quizquestions