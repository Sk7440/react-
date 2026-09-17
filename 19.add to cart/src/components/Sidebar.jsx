import React, { useContext } from 'react'
import { context } from './Contextapi'
import { IoMdArrowRoundBack } from "react-icons/io";

function Sidebar() {
    const { sideBar, setSidebar } = useContext(context)
    const { cart, setCart } = useContext(context)
    console.log(cart);

    let position;
    {
        if (!sideBar) {
            position = "-right-120"
        }
        else {
            position = "right-0"
        }
    }
    function back() {
        setSidebar(false)


    }



    return (
        <div className={`transition-all duration-500 h-full w-full sm:w-120 bg-neutral-950/95 backdrop-blur-xl border-l border-neutral-800/80 fixed top-0 ${position} z-40 overflow-hidden text-white flex flex-col p-6 shadow-2xl`}>

            <button
                onClick={() => { back() }}
                className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition active:scale-95 mb-6"
            >
                <IoMdArrowRoundBack className="text-lg" />
            </button>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                {
                    cart.map((ele, idx) => {
                        return (
                            <div key={ele.id || idx} className="flex items-center gap-4 p-4 rounded-xl border border-neutral-800/60 bg-neutral-900/50">
                                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-neutral-800 border border-neutral-700/40">
                                    <img src={ele.image_url} alt={ele.name} className="h-full w-full object-cover" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-semibold text-white truncate">
                                        {ele.name}
                                    </h3>

                                    <p className="text-xs text-neutral-400 mt-0.5">
                                        ${ele.price}
                                    </p>

                                    <div className="inline-flex items-center gap-2 mt-3 rounded-lg border border-neutral-800 bg-neutral-900/80 px-2 py-1">
                                        <button onClick={() => { }} className="h-5 w-5 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition active:scale-90 text-sm font-bold">
                                            +
                                        </button>

                                        <p className="text-xs font-semibold text-neutral-200 min-w-4 text-center">
                                            {ele.qty}
                                        </p>

                                        <button onClick={() => { }} className="h-5 w-5 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition active:scale-90 text-sm font-bold">
                                            -
                                        </button>
                                    </div>
                                </div>

                                <div className="text-right self-stretch flex flex-col justify-between">
                                    <span className="text-xs text-neutral-500">Total</span>
                                    <span className="text-sm font-bold text-white">
                                        ${(ele.price * ele.qty).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Sidebar