import { BiSearch, BiShoppingBag, BiHeart, BiUser } from 'react-icons/bi'
import Link from 'next/link'

export const Header = () => {
    return (
        <div className="flex items-center bg-gray-50 h-16 px-10">
            <div className="flex justify-between items-center w-full">
                <span>Logo</span>
                {/* Search Bar */}
                <div className="flex items-center bg-white rounded-lg border border-gray-300 p-2 gap-2">
                    <BiSearch className="size-5"/>
                    <input 
                        type="text" 
                        className="w-96 rounded outline-none"
                        placeholder="Search products..."
                    />
                </div>
                <nav className="flex gap-6">
                    <Link href={"/favorites"}><BiHeart className="size-6"/></Link>
                    <Link href={"/cart"}><BiShoppingBag className="size-6"/></Link>               
                    <span><BiUser className="size-6"/></span>
                </nav>
                
            </div>
        </div>
    )
}