import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Loader from "./LoadingUI";
import Card from "./Error";

export default function Page() {
    const [product, setProduct] = useState([])
    const params = useParams();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    async function Product() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/product/${params.id}`)
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`)
            }

            const data = await response.json()
            console.log(data);


            setProduct(data)

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

                {

                    error ? <Card /> :
                        loading ? <Loader /> :
                            <div
                                key={product.id || product.title}
                                className="w-full my-6 flex  justify-center flex-col md:flex-row flex-wrap items-center gap-6 overflow-hidden rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md border border-slate-100 dark:bg-slate-900/80 dark:border-slate-800"
                            >
                                <Link to={"/"}>
                                    <button className="flex items-center justify-center p-2 text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
                                        <IoMdArrowBack className="w-5 h-5" />
                                    </button>
                                </Link>
                                {/* Image Gallery Container - Fixed height with horizontal scroll */}
                                <div className="flex w-full md:w-1/2 gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200">
                                    <div

                                        className="relative h-48 w-48 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800"
                                    >
                                        <img
                                            src={
                                                product.images

                                            }
                                            alt={product.title}
                                            className="h-full w-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>

                                </div>

                                {/* Content Details */}
                                <div className="flex w-full md:w-1/2 flex-col justify-between">
                                    <div>
                                        {/* Category & Brand Header */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300">
                                                {product.category}
                                            </span>
                                            <span className="text-xs font-medium text-slate-400">•</span>
                                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide dark:text-slate-400">
                                                {product.brand}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                                            {product.title}
                                        </h1>

                                        {/* Description */}
                                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto border-t border-slate-100 pt-4 dark:border-slate-800/80">
                                        <div className="flex items-center justify-between mb-3">
                                            {/* Price */}
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-xs text-slate-400 font-medium">Price:</span>
                                                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                                                    ${product.price}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
                                                <svg className="h-4 w-4 fill-current text-amber-400" viewBox="0 0 20 20">
                                                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                                                </svg>
                                                <span className="text-xs font-bold">{product.rating}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-slate-400">Availability</span>
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded ${product.stock > 0 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'}`}>
                                                {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-4xl  mx-auto p-6 dark:bg-slate-900/80 dark:border-slate-800 rounded-xl shadow-sm">
                                    <h1 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
                                        Customer Reviews
                                    </h1>

                                    <div className=" flex items-center justify-center gap-5">
                                        {product?.reviews?.map((ele, idx) => (
                                            <div
                                                key={ele.id || idx}
                                                className="p-5 bg-slate-800 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-lg font-semibold text-gray-100">
                                                        {ele.reviewerName}
                                                    </h3>
                                                    <span className="text-xs text-gray-500">
                                                        {ele.date}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-1 mb-3">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                                        ★ {ele.rating} / 5
                                                    </span>
                                                </div>

                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {ele.comment}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                }
            </div>

        </>
    )
}