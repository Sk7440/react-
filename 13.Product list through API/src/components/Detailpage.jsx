import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Page() {
    const [products, setProducts] = useState([])
    const params = useParams();

    async function Product() {
        try {
            const response = await fetch('https://dummyjson.com/products')
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`)
            }

            const data = await response.json()
            // console.log(data.products);

            setProducts(data.products)
        
        }
        catch (error) {

            (`Request failed with status ${error.message}`)

        }
        finally {

            ("finally message are appears here")

        }

    }
    useEffect(() => {
        Product()
    }, [])

  let  data1 = products.find((ele) => {


                return ele.id == params.id;
            });
            console.log(data1);


    return (
        <>
            <div
                key={data1.id || data1.title}
                className="w-full my-6 flex flex-col md:flex-row items-center gap-6 overflow-hidden rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md border border-slate-100 dark:bg-slate-900/80 dark:border-slate-800"
            >
                {/* Image Gallery Container - Fixed height with horizontal scroll */}
                <div className="flex w-full md:w-1/2 gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200">
                    {data1.images.map((elee, index) => {
                        return (
                            <div
                                key={index}
                                className="relative h-48 w-48 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800"
                            >
                                <img
                                    src={elee}
                                    alt={data1.title}
                                    className="h-full w-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Content Details */}
                <div className="flex w-full md:w-1/2 flex-col justify-between">
                    <div>
                        {/* Category & Brand Header */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300">
                                {data1.category}
                            </span>
                            <span className="text-xs font-medium text-slate-400">•</span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide dark:text-slate-400">
                                {data1.brand}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                            {data1.title}
                        </h1>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                            {data1.description}
                        </p>
                    </div>

                    <div className="mt-auto border-t border-slate-100 pt-4 dark:border-slate-800/80">
                        <div className="flex items-center justify-between mb-3">
                            {/* Price */}
                            <div className="flex items-baseline gap-1">
                                <span className="text-xs text-slate-400 font-medium">Price:</span>
                                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                                    ${data1.price}
                                </span>
                            </div>

                            <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
                                <svg className="h-4 w-4 fill-current text-amber-400" viewBox="0 0 20 20">
                                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                                </svg>
                                <span className="text-xs font-bold">{data1.rating}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">Availability</span>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded ${data1.stock > 0 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'}`}>
                                {data1.stock > 0 ? `${data1.stock} in stock` : 'Out of Stock'}
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}