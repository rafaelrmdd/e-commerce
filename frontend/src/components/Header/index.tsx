import { IoCartOutline } from "react-icons/io5";

export function Header() {
    return (
        <header className="flex justify-between items-center px-4 py-4 bg-gray-800">
            <h1 className="text-purple-400 text-2xl font-bold">e-commerce</h1>

            <nav className="flex gap-8 text-white ">
                <span>Home</span>
                <span>Categories</span>
                <span>Offers</span>
                <span>New Releases</span>
                <span>Contact</span>
            </nav>

            <div className="flex gap-6 items-center">
                <input 
                    type="text" 
                    placeholder="Enter the product's name" 
                    className="w-64 bg-gray-700 placeholder:text-gray-400 rounded-full px-4 py-2"
                />
                <span className="text-white"><IoCartOutline size={20}/></span>
            </div>
        </header>
    )
}