import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
                            <i className="fa-solid fa-compass"></i> Wanderlust
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8 font-medium">
                        <Link to={"/"}>
                            <a className="text-emerald-600 transition">Home</a>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link to={'/check-tours'}>
                            <button
                                type="button"
                                className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition shadow-md"
                            >
                                Check your Tours
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar