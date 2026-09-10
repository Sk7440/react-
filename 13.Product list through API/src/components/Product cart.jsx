import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "./LoadingUI"
import Card from "./Error"

export default function Productcard() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    async function Product() {
        try {
            setLoading(true)

            const response = await fetch('https://dummyjson.com/products')
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`)
            }

            const data = await response.json()

            setProducts(data.products)
        }
        catch (error) {

            setError(error.message)

        }
        finally {
            setLoading(false)
                ("finally message are appears here")

        }

    }
    useEffect(() => {
        Product()
    }, [])
    return (
        <>
            <div className="flex w-full h-full items-center justify-center gap-6 flex-wrap p-4">
                {error ? (
                    <Card errorMsg={error} />
                ) : loading ? (
                    <Loader />
                ) : (
                    products.map((ele) => {
                        return (
                            <div
                                key={ele.id || ele.title}
                                className="w-md p-5 flex flex-col justify-center items-center rounded-2xl bg-white/80 shadow-lg backdrop-blur-md border border-slate-100 dark:bg-slate-900/80 dark:border-slate-800 transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Image Gallery Container */}
                                <div className="flex w-full md:w-1/2 gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 items-center">
                                    {ele.images?.map((elee, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="relative h-52 w-52 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center"
                                            >
                                                <img
                                                    src={elee}
                                                    alt={ele.title}
                                                    className="h-full w-full object-contain p-3 transition-transform duration-300 hover:scale-105"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Content Details */}
                                <div className="flex w-full md:w-1/2 flex-col justify-between space-y-4">
                                    <div>
                                        {/* Category & Brand Header */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300">
                                                {ele.category}
                                            </span>
                                            <span className="text-xs font-medium text-slate-400">•</span>
                                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide dark:text-slate-400">
                                                {ele.brand}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight line-clamp-1">
                                            {ele.title}
                                        </h1>

                                        {/* Description */}
                                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                                            {ele.description}
                                        </p>
                                    </div>

                                    {/* Price & Stock Section */}
                                    <div className="mt-auto border-t border-slate-100 pt-4 dark:border-slate-800/80 space-y-3">
                                        <div className="flex items-center justify-between">
                                            {/* Price */}
                                            <div className="flex items-baseline gap-1.5">
                                                <span className="text-xs text-slate-400 font-medium">Price:</span>
                                                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                                                    ${ele.price}
                                                </span>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
                                                <svg className="h-4 w-4 fill-current text-amber-400" viewBox="0 0 20 20">
                                                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                                                </svg>
                                                <span className="text-xs font-bold">{ele.rating}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-slate-400">Availability</span>
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded ${ele.stock > 0 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'}`}>
                                                {ele.stock > 0 ? `${ele.stock} in stock` : 'Out of Stock'}
                                            </span>
                                        </div>

                                        {/* Details Button */}
                                        <div className="pt-2">
                                            <Link to={`/Detailpage/${ele.id}`} className="block w-full">
                                                <button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-indigo-500/35 active:scale-95 cursor-pointer">
                                                    See Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    )


}
