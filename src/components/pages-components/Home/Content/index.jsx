import electronics from "@/assets/electronics.jpg"

export const Content = () => {
    return (
        <div>

            {/* Hero Section*/}
            <div className="flex items-center bg-blue-600 h-96 px-10">
                <div className="flex items-start flex-col gap-y-4 ">
                    <h1 className="text-4xl font-bold text-white">Summer Collection 2025 </h1> 
                    <h2 className="text-1xl font-semibold text-white">Discover the latest trends and amazing deals</h2>
                    <button className="bg-white px-6 py-2 rounded-lg font-semibold">Shop now</button>
                </div>
            </div>

            {/* Categories Section*/}
            <div className="mt-8 px-10 mb-8">
                <h2 className="text-2xl font-semibold ">Shop by Category</h2>

                {/* Categories*/}
                <div className="flex flex-wrap gap-4 mt-8">
                    <div className="w-[24%] h-52">
                        <img src={electronics} alt="a" />
                        <h2>Electronics</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}