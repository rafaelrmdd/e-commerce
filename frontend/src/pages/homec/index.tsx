import React from 'react';

export default function HomeC() {
  // Mock data para produtos mais vendidos
  const bestSellers = [
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

  // Categorias
  const categories = [
    { id: 1, name: "Eletrônicos", image: "/api/placeholder/300/200" },
    { id: 2, name: "Moda", image: "/api/placeholder/300/200" },
    { id: 3, name: "Casa & Decoração", image: "/api/placeholder/300/200" },
    { id: 4, name: "Esportes", image: "/api/placeholder/300/200" }
  ];

  // Produtos em destaque
  const featuredProducts = [
    {
      id: 1,
      title: "Notebook Ultra Slim i7",
      description: "Processador potente, tela de alta resolução e bateria de longa duração.",
      price: "R$ 4.999,90",
      image: "/api/placeholder/300/250"
    },
    {
      id: 2,
      title: "Smartphone 5G Pro Max",
      description: "Câmera de 108MP, tela AMOLED e carregamento ultra-rápido.",
      price: "R$ 3.499,90",
      image: "/api/placeholder/300/250"
    },
    {
      id: 3,
      title: "TV Smart 65 4K UHD",
      description: "Imagem crystal clear, som surround e sistema inteligente.",
      price: "R$ 5.299,90",
      image: "/api/placeholder/300/250"
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 px-4 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="text-purple-400 text-2xl font-bold">DarkStore</div>
        
        {/* Nav Links - Hidden on mobile */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Categorias</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Ofertas</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Lançamentos</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Contato</a>
        </nav>
        
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

      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/api/placeholder/1200/500")' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Os Melhores Produtos com os Melhores Preços</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Descubra nossa exclusiva coleção de produtos com até 50% de desconto nesta semana.
          </p>
          <button className="bg-purple-500 text-gray-900 font-bold py-3 px-8 rounded hover:bg-purple-400 transform transition hover:-translate-y-1 hover:shadow-lg">
            COMPRAR AGORA
          </button>
        </div>
      </section>

      {/* Best Sellers Section */}
      <div className="text-center my-12 relative">
        <h2 className="text-2xl font-bold inline-block px-4 bg-gray-900 relative z-10">MAIS VENDIDOS</h2>
        <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-gray-700 -z-0"></div>
      </div>

      <section className="bg-gray-800 mx-4 md:mx-8 p-6 rounded-lg">
        <div className="flex space-x-6 overflow-x-auto pb-4 snap-x scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
          {bestSellers.map((product) => (
            <div 
              key={product.id}
              className="flex-shrink-0 w-64 bg-gray-700 rounded-lg overflow-hidden snap-start hover:transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="relative h-52">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-purple-500 text-gray-900 text-xs font-bold px-2 py-1 rounded">TOP</div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{product.title}</h3>
                <div className="text-purple-400 text-xl font-bold mb-4">{product.price}</div>
                <button className="w-full bg-purple-500 text-gray-900 py-2 px-4 rounded font-medium hover:bg-purple-400 transition-colors">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <div className="text-center my-12 relative">
        <h2 className="text-2xl font-bold inline-block px-4 bg-gray-900 relative z-10">CATEGORIAS</h2>
        <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-gray-700 -z-0"></div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-8">
        {categories.map((category) => (
          <div key={category.id} className="relative h-52 rounded-lg overflow-hidden cursor-pointer">
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 flex items-center justify-center hover:from-black/30 hover:to-black/60 transition-all duration-300">
              <div className="text-2xl font-bold">{category.name}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Products Section */}
      <div className="text-center my-12 relative">
        <h2 className="text-2xl font-bold inline-block px-4 bg-gray-900 relative z-10">DESTAQUES DA SEMANA</h2>
        <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-gray-700 -z-0"></div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden flex flex-col">
            <div className="h-64">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-medium mb-2">{product.title}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="text-purple-400 text-2xl font-bold mb-6">{product.price}</div>
              <button className="w-full bg-purple-500 text-gray-900 py-3 px-4 rounded font-medium hover:bg-purple-400 transition-colors">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 mt-16 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-8 after:h-1 after:bg-purple-500">Navegação</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Produtos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Ofertas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Novidades</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-8 after:h-1 after:bg-purple-500">Categorias</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Eletrônicos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Moda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Casa & Decoração</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Esportes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-8 after:h-1 after:bg-purple-500">Atendimento</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Como Comprar</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Métodos de Pagamento</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Prazo de Entrega</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-8 after:h-1 after:bg-purple-500">Contato</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Email</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Telefone</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">WhatsApp</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Redes Sociais</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-gray-500 mt-12 pt-6 border-t border-gray-700">
            &copy; 2025 DarkStore | Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  );
};
