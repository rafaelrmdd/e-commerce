import React, { useState } from 'react';
import { FaUser, FaCog, FaLock, FaSignOutAlt, FaEdit, FaEye, FaEyeSlash, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function MyAccount() {
    const [activeTab, setActiveTab] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);
    
    // Mock user data
    const userData = {
        name: "João Silva",
        email: "joao.silva@email.com",
        phone: "(11) 99999-9999",
        address: "Rua das Flores, 123 - São Paulo, SP",
        memberSince: "Janeiro 2023"
    };

    const menuItems = [
        { id: 'profile', label: 'Dados da Conta', icon: FaUser },
        { id: 'password', label: 'Alterar Senha', icon: FaLock },
        { id: 'settings', label: 'Configurações', icon: FaCog },
        { id: 'logout', label: 'Sair da Conta', icon: FaSignOutAlt }
    ];

    const renderProfileContent = () => (
        <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Dados da Conta</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 rounded font-semibold transition duration-300">
                    <FaEdit size={16} />
                    Editar
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-2">Nome Completo</label>
                        <div className="bg-gray-700 p-3 rounded-lg">
                            <span className="text-white">{userData.name}</span>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-gray-300 mb-2">Email</label>
                        <div className="bg-gray-700 p-3 rounded-lg flex items-center gap-2">
                            <FaEnvelope size={16} className="text-gray-400" />
                            <span className="text-white">{userData.email}</span>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-gray-300 mb-2">Telefone</label>
                        <div className="bg-gray-700 p-3 rounded-lg flex items-center gap-2">
                            <FaPhone size={16} className="text-gray-400" />
                            <span className="text-white">{userData.phone}</span>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-2">Endereço</label>
                        <div className="bg-gray-700 p-3 rounded-lg flex items-center gap-2">
                            <FaMapMarkerAlt size={16} className="text-gray-400" />
                            <span className="text-white">{userData.address}</span>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-gray-300 mb-2">Membro desde</label>
                        <div className="bg-gray-700 p-3 rounded-lg">
                            <span className="text-white">{userData.memberSince}</span>
                        </div>
                    </div>
                    
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-white font-semibold mb-2">Status da Conta</h3>
                        <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                            Verificada
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPasswordContent = () => (
        <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Alterar Senha</h2>
            
            <div className="max-w-md space-y-4">
                <div>
                    <label className="block text-gray-300 mb-2">Senha Atual</label>
                    <div className="relative">
                        <input 
                            type={showPassword ? "text" : "password"}
                            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Digite sua senha atual"
                        />
                        <button 
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-white"
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>
                </div>
                
                <div>
                    <label className="block text-gray-300 mb-2">Nova Senha</label>
                    <input 
                        type="password"
                        className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Digite sua nova senha"
                    />
                </div>
                
                <div>
                    <label className="block text-gray-300 mb-2">Confirmar Nova Senha</label>
                    <input 
                        type="password"
                        className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Confirme sua nova senha"
                    />
                </div>
                
                <button className="w-full px-6 py-3 bg-purple-500 hover:bg-purple-400 rounded font-bold transition duration-300 mt-6">
                    Alterar Senha
                </button>
                
                <div className="bg-gray-700 p-4 rounded-lg mt-4">
                    <h4 className="text-white font-semibold mb-2">Requisitos da senha:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Mínimo de 8 caracteres</li>
                        <li>• Pelo menos uma letra maiúscula</li>
                        <li>• Pelo menos um número</li>
                        <li>• Pelo menos um caractere especial</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    const renderSettingsContent = () => (
        <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Configurações</h2>
            
            <div className="space-y-6">
                <div className="border-b border-gray-700 pb-4">
                    <h3 className="text-white font-semibold mb-4">Notificações</h3>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between">
                            <span className="text-gray-300">Emails promocionais</span>
                            <input type="checkbox" className="w-5 h-5 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500" defaultChecked />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-gray-300">Notificações de pedidos</span>
                            <input type="checkbox" className="w-5 h-5 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500" defaultChecked />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-gray-300">Newsletter semanal</span>
                            <input type="checkbox" className="w-5 h-5 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500" />
                        </label>
                    </div>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                    <h3 className="text-white font-semibold mb-4">Privacidade</h3>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between">
                            <span className="text-gray-300">Perfil público</span>
                            <input type="checkbox" className="w-5 h-5 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500" />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-gray-300">Mostrar histórico de compras</span>
                            <input type="checkbox" className="w-5 h-5 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500" />
                        </label>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-white font-semibold mb-4">Idioma e Região</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-300 mb-2">Idioma</label>
                            <select className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Português (BR)</option>
                                <option>English</option>
                                <option>Español</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">Moeda</label>
                            <select className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Real (BRL)</option>
                                <option>Dólar (USD)</option>
                                <option>Euro (EUR)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-400 rounded font-bold transition duration-300 mt-6">
                Salvar Configurações
            </button>
        </div>
    );

    const renderLogoutContent = () => (
        <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="mb-6">
                <FaSignOutAlt size={48} className="text-red-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Sair da Conta</h2>
                <p className="text-gray-300">Tem certeza que deseja sair da sua conta?</p>
            </div>
            
            <div className="flex gap-4 justify-center">
                <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded font-bold transition duration-300">
                    Cancelar
                </button>
                <button className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white rounded font-bold transition duration-300">
                    Confirmar Saída
                </button>
            </div>
        </div>
    );

    const renderContent = () => {
        switch(activeTab) {
            case 'profile': return renderProfileContent();
            case 'password': return renderPasswordContent();
            case 'settings': return renderSettingsContent();
            case 'logout': return renderLogoutContent();
            default: return renderProfileContent();
        }
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header simulado */}
            <div className="bg-gray-950 px-8 py-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-white">Minha Conta</h1>
                </div>
            </div>

            <div className="container mx-auto px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Menu */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                    <FaUser size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">{userData.name}</h3>
                                    <p className="text-gray-400 text-sm">Membro desde {userData.memberSince}</p>
                                </div>
                            </div>
                            
                            <nav className="space-y-2">
                                {menuItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveTab(item.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition duration-300 ${
                                                activeTab === item.id 
                                                    ? 'bg-purple-500 text-white' 
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`}
                                        >
                                            <Icon size={18} />
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}