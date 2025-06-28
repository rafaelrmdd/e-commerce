import { UsersContext } from "@/context/ContextProvider";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export function Header() {
    const { user, isUserLogged } = useContext(UsersContext);
    
    return (
        <header className="flex justify-between items-center px-4 py-4 bg-gray-800">
            <Link 
                className="text-purple-400 text-2xl font-bold hover:cursor-pointer"
                href={"/home"}
            >
                Reifferce
            </Link>

            <nav className="text-gray-50">
                <Link 
                    className="hover:bg-gray-700 transition duration-300 rounded px-4 py-2" 
                    href={"/home"}
                >
                    Home
                </Link>

                <Link 
                    className="hover:bg-gray-700 transition duration-300 rounded px-4 py-2"
                    href={"/products"}
                >
                    Products
                </Link>

                <Link 
                    className="hover:bg-gray-700 transition duration-300 rounded px-4 py-2"
                    href={"/offers"}
                >
                    Offers
                </Link>

                <Link 
                    className="hover:bg-gray-700 transition duration-300 rounded px-4 py-2"
                    href={"/contact"}
                >
                    Contact
                </Link>
            </nav>

            {isUserLogged ? 
                <div className="flex gap-x-3"> 
                    <div className="flex justify-center items-center">
                        <h2 className="text-purple-400 font-semibold">Hello, {user?.email}</h2>    
                    </div> 
                    <Link
                        className="flex justify-center items-center rounded-full p-1
                        hover:bg-gray-600 transition duration-200"
                        href={"/cart"}
                    >
                        <FaCartShopping 
                            className="hover:cursor-pointer"
                            color="white" 
                            size={24}
                        />
                    </Link>
                    
                    <Link
                        className="flex justify-center items-center rounded-full p-1
                        hover:bg-gray-600 transition duration-200"
                        href={"/account"}
                    >
                        <FaUserCircle 
                            className="hover:cursor-pointer"
                            color="white" 
                            size={24}
                        />
                    </Link>
                </div>
                : 
                <div className="flex gap-x-3"> 
                    <Link
                        className="flex items-center rounded hover:bg-gray-600 transition duration-200
                        p-1"
                        href={"/register"}
                        
                    >
                        <span className="text-gray-50">Sign Up</span>
                    </Link>
                    <Link
                        className="flex items-center rounded hover:bg-gray-600 transition duration-200
                        p-1"
                        href={"/login"}
                    >
                        <span className="text-gray-50">Log In</span>
                    </Link>
                </div>
            }
        </header>
    )
}