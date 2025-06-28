import { useState } from 'react';
import Image from 'next/image';

export default function ReviewC() {
    const [stars, setStars] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Mock product data
    const product = {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        imageURL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        price: 79.99
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-gray-950 py-4 px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-50">E-Commerce</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto py-16 px-8">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-50 mb-4">Avaliar Produto</h1>
                    <p className="text-gray-300">Compartilhe sua experiência com outros clientes</p>
                </div>

                {/* Product Info */}
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                    <div className="flex items-center gap-6">
                        <div className="relative w-24 h-24 bg-gray-600 rounded-lg overflow-hidden relative">
                            <Image 
                                fill
                                src={product.imageURL}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-50 mb-2">{product.name}</h2>
                            <span className="text-purple-400 text-lg font-bold">${product.price}</span>
                        </div>
                    </div>
                </div>

                {/* Review Form */}
                <div className="bg-gray-800 rounded-lg p-8">
                    <form className="space-y-6">
                        {/* Rating Section */}
                        <div>
                            <label className="block text-gray-50 text-lg font-semibold mb-4">
                                Sua Avaliação *
                            </label>
                            <div className="flex items-center gap-2 mb-2">
                                {/* {renderStars()} */}
                            </div>
                            <p className="text-gray-400 text-sm">
                                {stars > 0 ? `${stars} de 5 estrelas` : 'Clique nas estrelas para avaliar'}
                            </p>
                        </div>

                        {/* Title Section */}
                        <div>
                            <label htmlFor="review-title" className="block text-gray-50 text-lg font-semibold mb-3">
                                Título da Avaliação *
                            </label>
                            <input
                                id="review-title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Resuma sua experiência em poucas palavras"
                                className="w-full px-4 py-3 bg-gray-700 text-gray-50 rounded-lg border border-gray-600 
                                         focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 
                                         transition duration-300"
                                maxLength={100}
                            />
                            <p className="text-gray-400 text-sm mt-1">
                                {title.length}/100 caracteres
                            </p>
                        </div>

                        {/* Description Section */}
                        <div>
                            <label htmlFor="review-description" className="block text-gray-50 text-lg font-semibold mb-3">
                                Descrição Detalhada *
                            </label>
                            <textarea
                                id="review-description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Conte mais sobre sua experiência com o produto. O que você mais gostou? O que poderia ser melhor?"
                                rows={6}
                                className="w-full px-4 py-3 bg-gray-700 text-gray-50 rounded-lg border border-gray-600 
                                         focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 
                                         transition duration-300 resize-vertical"
                                maxLength={1000}
                            />
                            <p className="text-gray-400 text-sm mt-1">
                                {description.length}/1000 caracteres
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6">
                            <button
                                type="button"
                                className="flex-1 py-3 px-6 bg-gray-600 text-gray-50 font-semibold rounded-lg
                                         hover:bg-gray-500 transition duration-300"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-3 px-6 bg-purple-500 text-gray-900 font-semibold rounded-lg
                                         hover:bg-purple-400 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!stars || !title.trim() || !description.trim()}
                            >
                                Enviar Avaliação
                            </button>
                        </div>
                    </form>

                    {/* Guidelines */}
                    <div className="mt-8 pt-8 border-t border-gray-600">
                        <h3 className="text-gray-50 font-semibold mb-3">Diretrizes para Avaliação</h3>
                        <ul className="text-gray-400 text-sm space-y-1">
                            <li>• Seja honesto e construtivo em sua avaliação</li>
                            <li>• Foque na qualidade, funcionalidade e experiência de uso do produto</li>
                            <li>• Evite linguagem ofensiva ou inadequada</li>
                            <li>• Suas avaliações ajudam outros clientes a fazer melhores escolhas</li>
                        </ul>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 py-8 px-8 mt-16">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">© 2025 E-Commerce. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}