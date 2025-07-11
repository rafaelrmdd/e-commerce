Português / Portuguese

🛒 E-commerce Educativo
📖 Sobre o Projeto
Este é um projeto de e-commerce desenvolvido para fins educativos, demonstrando a implementação completa de uma aplicação web moderna com foco em boas práticas de desenvolvimento, segurança e arquitetura limpa. O projeto representa uma solução full-stack robusta que simula um ambiente de produção real.
🎯 Objetivo
O principal objetivo deste projeto é demonstrar competências técnicas em desenvolvimento web moderno, incluindo:

* Desenvolvimento de aplicações React/Next.js com TypeScript
* Implementação de APIs RESTful com .NET Core
* Sistemas de autenticação seguros com JWT
* Gestão de estado e estruturação de projetos
* Boas práticas de segurança e validação de dados

🚀 Tecnologias Utilizadas
Frontend

* Next.js - Framework React para aplicações web modernas
* TypeScript - Tipagem estática para maior robustez do código
* Tailwind CSS - Framework CSS utilitário para estilização eficiente
* Axios - Cliente HTTP com interceptadores para requisições à API
* Context API - Gerenciamento de estado global da aplicação
* JWT + Refresh Tokens - Sistema de autenticação seguro

Backend

* .NET Core - Framework web moderno e performático
* C# - Linguagem de programação principal
* Entity Framework - ORM para manipulação de dados
* PostgreSQL - Banco de dados relacional robusto
* JWT Authentication - Sistema de autenticação baseado em tokens
* Custom Exceptions - Tratamento personalizado de erros

🏗️ Arquitetura e Estrutura
Frontend (Next.js)
src/
├── components/     # Componentes reutilizáveis
├── context/        # Context API para estado global
├── services/       # Serviços e configurações do Axios
├── assets/         # Recursos estáticos (imagens, ícones)
└── pages/          # Páginas da aplicação
Backend (.NET Core)
├── Controllers/    # Controladores da API
├── Models/         # Modelos de dados e DTOs
├── Services/       # Lógica de negócios
├── Context/        # Configuração do Entity Framework
├── DTOs/           # Tranferência seguro dos dados
└── Migrations/     # Migrações do banco de dados

🔐 Sistema de Autenticação
Frontend

* JWT com Refresh Tokens: Implementação segura que permite renovação automática de tokens
* Axios Interceptors: Interceptação automática de requisições para inclusão de tokens e renovação
* Proteção de Rotas: Controle de acesso baseado no status de autenticação

Backend

* JWT Authentication: Validação de tokens em todas as rotas protegidas
* Custom Exceptions: Sistema robusto de tratamento de erros
* Validação de Input: Sanitização e validação de todos os dados recebidos

💡 Destaques Técnicos
TypeScript em Todo o Frontend
O uso consistente do TypeScript garante:

* Detecção precoce de erros durante o desenvolvimento
* Melhor experiência de desenvolvimento com IntelliSense
* Código mais legível e autodocumentado
* Facilita manutenção e colaboração em equipe

Padrões de Desenvolvimento Modernos

* Separation of Concerns: Separação clara entre lógica de negócios, apresentação e dados
* Code-First Approach: Modelagem do banco de dados através de código
* RESTful API Design: Endpoints bem estruturados seguindo convenções REST

Segurança

* Input Validation: Validação rigorosa de todos os dados de entrada
* SQL Injection Prevention: Uso de ORM com queries parametrizadas
* XSS Protection: Sanitização de dados do usuário
* CORS Configuration: Configuração adequada para requisições cross-origin

📱 Funcionalidades Implementadas

* Catálogo de Produtos: Listagem e busca de produtos
* Carrinho de Compras: Adição, remoção e atualização de itens
* Sistema de Usuários: Registro, login e perfil do usuário
* Autenticação Persistente: Manutenção de sessão com refresh tokens
* Interface Responsiva: Design adaptativo para desktop e mobile
* Validação de Formulários: Feedback em tempo real para o usuário

🛠️ Configuração e Execução
Pré-requisitos

* Node.js 18+
* .NET Core 6.0+
* PostgreSQL 13+

Frontend
bash# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
Backend
bash# Restaurar pacotes
dotnet restore

# Aplicar migrações
dotnet ef database update

# Executar a API
dotnet run

📊 Banco de Dados
O projeto utiliza PostgreSQL com Entity Framework Code-First, proporcionando:

* Versionamento do schema através de migrações
* Relacionamentos bem definidos entre entidades
* Queries otimizadas através do ORM
* Facilidade para mudanças e evoluções do modelo

🎨 Interface do Usuário
A interface foi desenvolvida com Tailwind CSS, garantindo:

* Design system consistente
* Componentes reutilizáveis
* Performance otimizada
* Manutenibilidade simplificada

🔄 Gestão de Estado
O Context API foi implementado para:

* Compartilhamento de estado entre componentes
* Gerenciamento de dados do usuário autenticado
* Controle do estado do carrinho de compras
*Sincronização de dados em tempo real

📈 Resultados Alcançados
Este projeto demonstra:

* Capacidade de desenvolvimento full-stack completo
* Implementação de sistemas de autenticação seguros
* Conhecimento de padrões modernos de desenvolvimento
* Habilidade em TypeScript, React/Next.js e .NET Core
*Compreensão de arquitetura de software e boas práticas

🎓 Aprendizados
Durante o desenvolvimento, foram aplicados conceitos importantes como:

* Arquitetura limpa e organização de código
* Segurança em aplicações web
* Otimização de performance
* Tratamento de erros e exceções
* Documentação e versionamento

Este projeto foi desenvolvido como demonstração de competências técnicas em desenvolvimento web moderno, representando um e-commerce funcional e seguro construído com as melhores práticas do mercado.

- - - - -
English / Inglês

🛒 Educational E-commerce Platform
📖 About the Project
This is an e-commerce project developed for educational purposes, demonstrating the complete implementation of a modern web application with focus on development best practices, security, and clean architecture. The project represents a robust full-stack solution that simulates a real production environment.
🎯 Objective
The main objective of this project is to demonstrate technical competencies in modern web development, including:

* Development of React/Next.js applications with TypeScript
* Implementation of RESTful APIs with .NET Core
* Secure authentication systems with JWT
* State management and project structuring
* Security best practices and data validation

🚀 Technologies Used
Frontend

* Next.js - React framework for modern web applications
* TypeScript - Static typing for more robust code
* Tailwind CSS - Utility-first CSS framework for efficient styling
* Axios - HTTP client with interceptors for API requests
* Context API - Global state management for the application
* JWT + Refresh Tokens - Secure authentication system

Backend

* .NET Core - Modern and performant web framework
* C# - Primary programming language
* Entity Framework - ORM for data manipulation
* PostgreSQL - Robust relational database
* JWT Authentication - Token-based authentication system
* Custom Exceptions - Personalized error handling

🏗️ Architecture and Structure
Frontend (Next.js)
src/
├── components/     # Reusable components
├── context/        # Context API for global state
├── services/       # Services and Axios configurations
├── assets/         # Static resources (images, icons)
└── pages/          # Application pages
Backend (.NET Core)
├── Controllers/    # API controllers
├── Models/         # Data models and DTOs
├── Services/       # Business logic
├── Context/        # Entity Framework configuration
└── Migrations/     # Database migrations
🔐 Authentication System
Frontend

* JWT with Refresh Tokens: Secure implementation that allows automatic token renewal
* Axios Interceptors: Automatic request interception for token inclusion and renewal
* Route Protection: Access control based on authentication status

Backend

* JWT Authentication: Token validation on all protected routes
* Custom Exceptions: Robust error handling system
* Input Validation: Sanitization and validation of all received data

💡 Technical Highlights
TypeScript Throughout the Frontend
The consistent use of TypeScript ensures:

* Early error detection during development
* Better development experience with IntelliSense
* More readable and self-documented code
* Facilitates maintenance and team collaboration

Modern Development Patterns

* Separation of Concerns: Clear separation between business logic, presentation, and data
* Code-First Approach: Database modeling through code
* RESTful API Design: Well-structured endpoints following REST conventions
* Responsive Design: Adaptive interface for different devices

Security

* Input Validation: Rigorous validation of all input data
* SQL Injection Prevention: Use of ORM with parameterized queries
* XSS Protection: User data sanitization
* CORS Configuration: Proper configuration for cross-origin requests

📱 Implemented Features

* Product Catalog: Product listing and search functionality
* Shopping Cart: Add, remove, and update items
* User System: User registration, login, and profile management
* Persistent Authentication: Session maintenance with refresh tokens
* Responsive Interface: Adaptive design for desktop and mobile
* Form Validation: Real-time feedback for users

🛠️ Setup and Execution
Prerequisites

* Node.js 18+
* .NET Core 6.0+
* PostgreSQL 13+

Frontend
bash# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build
Backend
bash# Restore packages
dotnet restore

# Apply migrations
dotnet ef database update

# Run the API
dotnet run
📊 Database
The project uses PostgreSQL with Entity Framework Code-First, providing:

* Schema versioning through migrations
* Well-defined relationships between entities
* Optimized queries through the ORM
* Easy changes and model evolution

🎨 User Interface
The interface was developed with Tailwind CSS, ensuring:

* Consistent design system
* Reusable components
* Optimized performance
* Simplified maintainability

🔄 State Management
The Context API was implemented for:

* State sharing between components
* Management of authenticated user data
* Shopping cart state control
* Real-time data synchronization

📈 Achieved Results
This project demonstrates:

* Complete full-stack development capability
* Implementation of secure authentication systems
* Knowledge of modern development patterns
* Proficiency in TypeScript, React/Next.js, and .NET Core
* Understanding of software architecture and best practices

🎓 Learning Outcomes
During development, important concepts were applied such as:

* Clean architecture and code organization
* Web application security
* Performance optimization
* Error and exception handling
* Documentation and versioning
* 
This project was developed as a demonstration of technical competencies in modern web development, representing a functional and secure e-commerce platform built with industry best practices.
