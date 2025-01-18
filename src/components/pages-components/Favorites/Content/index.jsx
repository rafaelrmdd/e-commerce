import { Card } from "../Card"

export const Content = () => {
    return (
        <div className="bg-gray-50">
            <div className="px-10 mt-6">
                <h3><span>Home </span>/<span> Favorites</span></h3>
            </div>

            <div className="px-10 mt-6">
                <h2 className="text-2xl font-semibold">My Favorites</h2>

                {/* Favorited Products */}
                <div className="flex flex-wrap gap-20 mt-6">
                    <Card />   
                    <Card />  
                    <Card />  
                    <Card />  
                    <Card />  
                </div>
            </div>
        </div>
    )
}