# Webdocker

> Projeto Node.js com Express e Docker.

## 📌 Sobre o Projeto
Este projeto é uma API simples usando **Node.js** e **Express**, containerizada com **Docker** e gerenciada pelo **Docker Compose**.

## 🚀 Tecnologias Utilizadas
- 🟢 **Node.js**
- 📦 **Express.js**
- 🐳 **Docker**
- 📜 **Docker Compose**

## 📂 Estrutura do Projeto
```
webdocker/
├── Dockerfile
├── docker-compose.yml
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## 🔧 Como Rodar o Projeto

### 🏗️ Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### ▶️ Rodando o Projeto
1. **Clone o repositório:**
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd webdocker
   ```

2. **Inicie os contêineres:**
   ```sh
   docker-compose up -d
   ```
3. **Para reconstruir as imagens e garantir que tudo está atualizado, use:
    ```sh
    docker-compose up --build
    ```
    
4. **Acesse a aplicação:**
   O servidor estará rodando em:  
   👉 `http://localhost:3000`

5. **Parar os contêineres:**
   ```sh
   docker-compose down
   ```

## 🤝 Contribuidores
- João Eduardo
- Jonas Marcos
- Luiz Felipe

---
##✅Referências✅##
Erick Wendel https://www.youtube.com/watch?v=Bp2bU6fQcSo
Rocketseat https://www.youtube.com/watch?v=AVNADGzXrrQ

