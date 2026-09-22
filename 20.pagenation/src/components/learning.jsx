import React, { useEffect, useState } from 'react'

export default function App() {

  const productsData = [
    {
      id: 1,
      name: 'laptop',
      price: 23
    },
    {
      id: 2,
      name: 'shoes',
      price: 99
    },
    {
      id: 3,
      name: 'mobile',
      price: 23
    },
    {
      id: 4,
      name: 'laptop',
      price: 23
    },
    {
      id: 5,
      name: 'shoes',
      price: 99
    },
    {
      id: 6,
      name: 'mobile',
      price: 23
    },
  ]
  let prodPerPage = 3

  const [page, setPage] = useState(0)
  const [products, setProducts] = useState(productsData)
  const [totalPages, setTotalPages] = useState(Math.ceil(products.length / prodPerPage))



  function paginate(page) {
    let startIndex = page * prodPerPage
    let endIndex = startIndex + prodPerPage
console.log(startIndex, endIndex);

    let productsToShow = productsData.slice(startIndex, endIndex)
    console.log(productsToShow);
    
    setProducts(productsToShow)
  }

  useEffect(() => {
    paginate(page)
  }, [page])

  return (
    <div>
      {
        products.map((ele, idx) => {
          return (
            <div>
              <h1>
                {ele.id}
              </h1>
              <h1>
                {ele.name}
              </h1>
              <h3>
                {ele.price}
              </h3>
            </div>
          )
        })
      }




      {
        Array.from({ length: totalPages }).map((ele, idx) => {
          return (
            <button onClick={() => setPage(idx)}>
              {idx + 1}
            </button>
          )
        })
      }



    </div>
  )
}
