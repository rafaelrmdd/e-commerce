import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export function Header() {
    return (
        <header className="flex justify-between items-center px-4 py-4 bg-gray-800">
            <h1 className="text-purple-400 text-2xl font-bold hover:cursor-pointer">e-commerce</h1>

            <nav className="flex gap-8 text-white ">
                <Link href={"/home"}>Home</Link>
                <Link href={"/products"}>Products</Link>
                <Link href={"/offers"}>Offers</Link>
                <Link href={"/newreleases"}>New Releases</Link>
                <Link href={"/contact"}>Contact</Link>
            </nav>

            <div className="flex gap-6 items-center">
                <FaUserCircle 
                    className="hover:cursor-pointer"
                    color="white" 
                    size={24}/>
            </div>
        </header>
    )
}