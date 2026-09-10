import React, { useState } from "react";
import { Link } from "react-router-dom"; // Change or replace with simple <a> if not using React Router

export default function Navbar() {



    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-20 gap-4">

                    <div className="flex items-center justify-center gap-3 shrink-0">
                        <Link to="/" className="flex items-center gap-2.5 group">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                                M
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    Mart<span className="text-indigo-600 dark:text-indigo-400">-O</span>
                                </span>
                                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest -mt-1">
                                    Store
                                </span>
                            </div>
                        </Link>
                    </div>






                </div>
            </div>


        </header>
    );
}