import { BiSearch, BiShoppingBag, BiHeart, BiUser } from 'react-icons/bi'

export const Header = () => {
    return (
        <div className="flex items-center bg-white h-16 px-10">
            <div className="flex justify-between items-center w-full">
                <span>Logo</span>
                <div className="h-[50px] flex items-center bg-white rounded-lg border border-gray-300 p-2 gap-2">
                    <BiSearch className="size-5"/>
                    <input 
                        type="text" 
                        className="w-[400px] h-[30px] rounded outline-none"
                        placeholder="Search products..."
                    />
                </div>
                <nav className="flex gap-2">
                    <span><BiHeart className="size-6"/></span>
                    <span><BiShoppingBag className="size-6"/></span>
                    <span><BiUser className="size-6"/></span>
                </nav>
                
            </div>
        </div>
    )
}