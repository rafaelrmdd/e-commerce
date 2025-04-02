import React, { useState } from 'react';

const ProductPage = () => {
  // Estado para quantidade do produto
  const [quantity, setQuantity] = useState(1);
  
  // Mockup de dados do produto
  const product = {
    id: 2,
    title: "Smartphone 5G Pro Max",
    price: "R$ 3.499,90",
    originalPrice: "R$ 3.999,90",
    discount: "12%",
    rating: 4.7,
    reviews: 153,
    description: "Experimente o futuro da tecnologia móvel com o Smartphone 5G Pro Max. Equipado com uma impressionante câmera de 108MP, tela AMOLED de 6.7\" com taxa de atualização de 120Hz e carregamento ultra-rápido de 65W. O processador de última geração garante desempenho excepcional para jogos e multitarefas.",
    features: [
      "Câmera principal de 108MP com estabilização óptica",
      "Processador octa-core de 3.0GHz",
      "Bateria de 5000mAh com carregamento rápido de 65W",
      "Tela AMOLED de 6.7\" com 120Hz",
      "Memória RAM de 12GB e armazenamento de 256GB",
      "Classificação IP68 de resistência à água e poeira"
    ],
    colors: ["Preto Estelar", "Azul Oceano", "Prata Lunar"],
    images: [
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500"
    ],
    stock: 15,
    sku: "SP5G-PRO-MAX-256",
    specifications: {
      "Dimensões": "160.8 x 78.1 x 7.65 mm",
      "Peso": "189g",
      "Sistema Operacional": "Android 14",
      "Garantia": "12 meses"
    },
    relatedProducts: [
      {
        id: 1,
        title: "Fone de Ouvido Bluetooth Premium",
        price: "R$ 299,90",
        image: "/api/placeholder/150/150"
      },
      {
        id: 3,
        title: "Carregador Sem Fio 15W",
        price: "R$ 199,90",
        image: "/api/placeholder/150/150"
      },
      {
        id: 4,
        title: "Capa Protetora Premium",
        price: "R$ 89,90",
        image: "/api/placeholder/150/150"
      }
    ]
  };
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Funções para manipular quantidade
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header (simplificado para este exemplo) */}
      <header className="bg-gray-800 px-4 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="text-purple-400 text-2xl font-bold">DarkStore</div>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="bg-gray-700 text-white px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="cursor-pointer">🛒</div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 text-sm">
        <div className="flex items-center text-gray-400">
          <a href="#" className="hover:text-purple-400">Home</a>
          <span className="mx-2">›</span>
          <a href="#" className="hover:text-purple-400">Eletrônicos</a>
          <span className="mx-2">›</span>
          <a href="#" className="hover:text-purple-400">Smartphones</a>
          <span className="mx-2">›</span>
          <span className="text-gray-300">{product.title}</span>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center h-96">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title} 
                className="object-contain max-h-full"
              />
            </div>
            
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 flex-shrink-0 bg-gray-800 rounded-md overflow-hidden cursor-pointer ${selectedImage === index ? 'ring-2 ring-purple-500' : ''}`}
                >
                  <img src={image} alt={`${product.title} - vista ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              
              <div className="flex items-center mt-3">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="ml-2 text-gray-300">{product.rating} ({product.reviews} avaliações)</span>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center">
                  <span className="text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="ml-2 bg-purple-500 text-gray-900 text-xs px-2 py-1 rounded font-bold">-{product.discount}</span>
                </div>
                <div className="text-3xl font-bold text-purple-400 mt-1">{product.price}</div>
                <div className="text-gray-400 mt-1">ou 12x de R$ 291,66 sem juros</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Cor</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md ${selectedColor === color 
                        ? 'border-purple-500 bg-gray-800 text-purple-400' 
                        : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Quantidade</h3>
                <div className="flex w-36 h-12">
                  <button 
                    onClick={decreaseQuantity}
                    className="w-12 bg-gray-800 text-white flex items-center justify-center border border-gray-700 rounded-l-md hover:bg-gray-700"
                  >
                    -
                  </button>
                  <div className="flex-1 bg-gray-800 text-white flex items-center justify-center border-t border-b border-gray-700">
                    {quantity}
                  </div>
                  <button 
                    onClick={increaseQuantity}
                    className="w-12 bg-gray-800 text-white flex items-center justify-center border border-gray-700 rounded-r-md hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
                <div className="text-sm text-gray-400 mt-2">Disponível: {product.stock} unidades</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-purple-500 text-gray-900 py-4 px-6 rounded-md font-bold text-lg hover:bg-purple-400 transition-colors flex items-center justify-center space-x-2">
                <span>COMPRAR AGORA</span>
              </button>
              
              <button className="w-full bg-gray-800 text-white py-4 px-6 rounded-md font-bold text-lg border border-purple-500 hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <div className="flex space-x-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <span className="mr-2">🔒</span>
                  <span>Compra Segura</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🚚</span>
                  <span>Envio em 24h</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">💳</span>
                  <span>Parcelamento sem juros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description & Features */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Descrição</h2>
              <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
                <p>{product.description}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Características</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <ul className="space-y-3 text-gray-300">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Especificações</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <table className="w-full text-gray-300">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-700">
                        <td className="py-3 font-medium w-1/3">{key}</td>
                        <td className="py-3">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Produtos Relacionados</h2>
            <div className="space-y-4">
              {product.relatedProducts.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-4 flex">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <div className="text-purple-400 font-bold mt-1">{item.price}</div>
                  </div>
                  <button className="ml-2 flex-shrink-0 bg-purple-500 text-gray-900 px-2 text-sm rounded-md flex items-center">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Avaliações dos Clientes</h2>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold">{product.rating}</div>
              <div className="flex text-yellow-400 mt-2">★★★★★</div>
              <div className="text-gray-400 mt-1">{product.reviews} avaliações</div>
            </div>
            
            <button className="bg-purple-500 text-gray-900 px-6 py-3 rounded-md font-bold hover:bg-purple-400 transition-colors">
              AVALIAR PRODUTO
            </button>
          </div>
          
          <div className="mt-8 border-t border-gray-700 pt-6">
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="pb-6 border-b border-gray-700">
                <div className="flex justify-between">
                  <div>
                    <div className="flex text-yellow-400">★★★★★</div>
                    <h3 className="font-bold mt-2">Excelente smartphone!</h3>
                  </div>
                  <div className="text-gray-400 text-sm">14/03/2025</div>
                </div>
                
                <div className="mt-2 text-gray-300">
                  <p>Comprei este smartphone há um mês e estou extremamente satisfeito. A câmera é incrível, a bateria dura o dia todo mesmo com uso intenso, e a tela AMOLED é simplesmente deslumbrante.</p>
                </div>
                <div className="mt-2 text-gray-400 text-sm">
                  Ricardo S. - Cliente Verificado
                </div>
              </div>
              
              {/* Review 2 */}
              <div className="pb-6 border-b border-gray-700">
                <div className="flex justify-between">
                  <div>
                    <div className="flex text-yellow-400">★★★★<span className="text-gray-600">★</span></div>
                    <h3 className="font-bold mt-2">Bom custo-benefício</h3>
                  </div>
                  <div className="text-gray-400 text-sm">02/03/2025</div>
                </div>
                
                <div className="mt-2 text-gray-300">
                  <p>O desempenho é excelente e a tela é linda. A bateria dura bastante também. Tirei uma estrela porque o carregador não veio na caixa e achei o preço um pouco salgado, mas no geral é um ótimo aparelho.</p>
                </div>
                <div className="mt-2 text-gray-400 text-sm">
                  Amanda L. - Cliente Verificado
                </div>
              </div>
              
              <button className="text-purple-400 font-medium hover:underline">
                Ver todas as {product.reviews} avaliações
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (simplificado) */}
      <footer className="bg-gray-800 mt-16 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 mt-12 pt-6 border-t border-gray-700">
            &copy; 2025 DarkStore | Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;