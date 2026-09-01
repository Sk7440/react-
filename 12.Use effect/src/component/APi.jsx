import { useEffect, useState } from "react";

export default function API() {

    const [products, setProducts]= useState([])

    async function fetchData(){
        const res  = await fetch('https://dummyjson.com/products')
        const data  = await res.json()

        console.log(data);
        setProducts(data.products)
        
    }


    useEffect(()=>{
        fetchData()
    }, [])
    


    return (
        <>

        {
            products.map((ele,idx)=>{
                return (
                    <>
                        <div>
                            {ele.title}
                        </div>
                    </>
                )
            })
        }

        </>
    )
}