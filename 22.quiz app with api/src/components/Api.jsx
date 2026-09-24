import React from 'react'

function Api() {
    return (
        async function fetch() {
            try {
                const table = {
                    sports: 21,
                    history: 23,
                    politics: 24,
                }

                const API_ENDPOINT = 'https://opentdb.com/api.php?'

                const HandleSubmit = (e) => {
                    e.preventDefault()
                    const { quantity, difficulty, category } = quiz
                    console.log(quantity, difficulty, category);

                    const url = `${API_ENDPOINT}amount=${quantity}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
                    FetchQuestions(url)
                    console.log(url);



                }
            }
            catch (error) {
                console.log(error);

            }
            finally {
                console.log("khbsdkcj;f");

            }

        }
    )
}

export default Api