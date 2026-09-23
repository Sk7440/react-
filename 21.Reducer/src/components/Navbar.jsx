import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
                {/* Brand / Logo */}
                <h1 className="text-xl font-bold tracking-tight text-gray-900 cursor-pointer hover:text-indigo-600 transition-colors">
                    StoreName
                </h1>

                {/* Cart Button */}
                <div className="relative inline-flex items-center justify-center p-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer">
                    <CiShoppingCart className="w-7 h-7" />

                    {/* Optional badge for cart item count */}
                    <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-semibold text-white bg-indigo-600 rounded-full">
                        3
                    </span>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
