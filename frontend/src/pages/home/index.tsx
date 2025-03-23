
import Slider from "react-slick"
import { Header } from "@/components/Header"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function Home() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: false,
        centerMode: false,
        adaptiveHeight: true
    }

    type ProductProps = {
        id: number
        title: string
        price: string
        image: string
    }

    const temporaryBestSellers : ProductProps[] = [
        {
          id: 1,
          title: "Fone de Ouvido Bluetooth Premium",
          price: "R$ 299,90",
          image: "/api/placeholder/250/200"
        },
        {
          id: 2,
          title: "Smartwatch Ultra Series",
          price: "R$ 499,90",
          image: "/api/placeholder/250/200"
        },
        {
          id: 3,
          title: "Tênis Esportivo Pro",
          price: "R$ 399,90",
          image: "/api/placeholder/250/200"
        },
        {
          id: 4,
          title: "Câmera DSLR 4K",
          price: "R$ 2.499,90",
          image: "/api/placeholder/250/200"
        },
        {
          id: 5,
          title: "Mochila Urbana Premium",
          price: "R$ 199,90",
          image: "/api/placeholder/250/200"
        },
        {
          id: 6,
          title: "Console de Jogos Ultimate",
          price: "R$ 3.999,90",
          image: "/api/placeholder/250/200"
        }
      ];

    return (
        <div className="h-screen bg-gray-900">
            <Header/>
            
            <section className="flex justify-center py-20 w-full bg-gray-950">
                <div className="text-center">
                    <h1 className="text-4xl text-white font-bold mb-4">The Best Products with the Best Prices</h1>
                    <h3 className="text-lg mb-8 text-gray-300">Discover our exclusive products collection with up to 50% discount this week</h3>

                    <button 
                        className="px-6 py-3 bg-purple-500 hover:bg-purple-400 rounded font-bold"
                    >
                        BUY NOW
                    </button>
                </div>   
            </section>

            <main className="bg-gray-900">
                <div className="py-16 px-8">
                    <div className="flex justify-center items-center gap-4">
                        <hr className="text-gray-600 w-52"/>
                        <h2 className="font-bold text-white text-2xl">BEST SELLERS</h2>
                        <hr className="text-gray-600 w-52"/>
                    </div>

                    {/* Carousel */}
                    <div className="bg-gray-800 p-6 rounded mt-16">
                        <Slider {...settings}>
                            {temporaryBestSellers.map((product : ProductProps)  => (
                                <div className="p-3" key={product.id}>
                                    <div className="bg-gray-700 p-2.5 rounded-lg w-96">
                                        {/* Image */}
                                        <div className="bg-black w-full h-56">
                                            
                                        </div>

                                        {/* Product Informations */}
                                        <div className="">
                                            <h2 className="text-white font-semibold mb-2">{product.title}</h2>
                                            <span className="text-purple-400 text-xl block mb-4 font-bold">{product.price}</span>
                                            <button 
                                                className="px-4 py-2 bg-purple-500 text-gray-900 font-semibold rounded w-full"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>       
                                    </div>      
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                
                {/* Categories */}
                <section className="px-8">
                    <div className="flex justify-center items-center gap-4">
                        <hr className="text-gray-600 w-52"/>
                        <h2 className="font-bold text-white text-2xl">CATEGORIES</h2>
                        <hr className="text-gray-600 w-52"/>
                    </div>

                    <div className="flex justify-between mt-16">
                        <div className="bg-red-500 rounded w-72 h-44 hover:brightness-50">
                            Electronics
                        </div>
                        <div className="bg-red-500 rounded w-72 h-44">
                            Vogue
                        </div>
                        <div className="bg-red-500 rounded w-72 h-44">
                            House & Decoration
                        </div>
                        <div className="bg-red-500 rounded w-72 h-44">
                            Sports
                        </div>
                    </div>
                </section>

                {/* Featured Items */}
                <section className="mt-16 px-8">
                    <div className="flex justify-center items-center gap-4">
                        <hr className="text-gray-600 w-40"/>
                        <h2 className="font-bold text-white text-2xl">FEATURED THIS WEEK</h2>
                        <hr className="text-gray-600 w-40"/>
                    </div>

                    <div className="flex justify-between mt-16">
                        <div className="bg-red-600 w-96 h-96 rounded">
                            {/* Image */}
                            <div className="bg-blue-500 w-full h-2/3">

                            </div>
                        </div>
                        <div className="bg-red-600 w-96 h-96 rounded">
                            <div className="bg-blue-500 w-full h-2/3">
                            
                            </div>
                        </div>
                        <div className="bg-red-600 w-96 h-96 rounded">
                            <div className="bg-blue-500 w-full h-2/3">
                            
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="bg-gray-600 mt-16 ">
                    <nav className="flex gap-x-56 p-4 justify-center">
                        <ul>
                            <li className="text-gray-50 text-xl font-bold ">
                                Navigation
                            </li>
                            <li className="text-gray-400">
                                Home
                            </li>
                            <li className="text-gray-400">
                                Products
                            </li>
                            <li className="text-gray-400">
                                Offers
                            </li>
                            <li className="text-gray-400">
                                News
                            </li>
                        </ul>

                        <ul>
                            <li className="text-gray-50 text-xl font-bold ">
                                Navigation
                            </li>
                            <li className="text-gray-400">
                                Home
                            </li>
                            <li className="text-gray-400">
                                Products
                            </li>
                            <li className="text-gray-400">
                                Offers
                            </li>
                            <li className="text-gray-400">
                                News
                            </li>
                        </ul>

                        <ul>
                            <li className="text-gray-50 text-xl font-bold ">
                                Navigation
                            </li>
                            <li className="text-gray-400">
                                Home
                            </li>
                            <li className="text-gray-400">
                                Products
                            </li>
                            <li className="text-gray-400">
                                Offers
                            </li>
                            <li className="text-gray-400">
                                News
                            </li>
                        </ul>

                        <ul>
                            <li className="text-gray-50 text-xl font-bold ">
                                Navigation
                            </li>
                            <li className="text-gray-400">
                                Home
                            </li>
                            <li className="text-gray-400">
                                Products
                            </li>
                            <li className="text-gray-400">
                                Offers
                            </li>
                            <li className="text-gray-400">
                                News
                            </li>
                        </ul>
                    </nav>
                </footer>

            </main>
        </div>
    )
}