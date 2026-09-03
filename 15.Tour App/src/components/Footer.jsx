import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <a href="#" className="text-2xl font-bold text-white flex items-center gap-2 mb-3">
                        <i className="fa-solid fa-compass text-emerald-500"></i> Wanderlust
                    </a>
                    <p className="text-sm">Creating unforgettable travel experiences around the world with expert-curated tours.</p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Popular Tours</a></li>
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" className="hover:text-white transition"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="hover:text-white transition"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="hover:text-white transition"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 text-center text-sm pt-6">
                © 2026 Wanderlust Tours. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer