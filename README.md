# 🎬 ProyectoM2 - Aplicación de Películas

## 🎯 Objetivo del Proyecto
Desarrollar una aplicación web en la cual el usuario pueda:
- Buscar películas 🔍  
- Ver detalles de cada película 🎞️  
- Practicar consumo de APIs externas y renderizado dinámico en frontend  

Este proyecto tiene como fin aplicar conceptos de **JavaScript**, **React** y consumo de **REST APIs**.

---

## 💻 Tecnologías utilizadas
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff&style=for-the-badge)
![REST API](https://img.shields.io/badge/REST%20API-005571?logo=api&logoColor=fff&style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=fff&style=for-the-badge)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=fff&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=for-the-badge)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=fff&style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=for-the-badge)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?logo=webpack&logoColor=000&style=for-the-badge)
![Live Server](https://img.shields.io/badge/Live%20Server-4CAF50?logo=visualstudiocode&logoColor=fff&style=for-the-badge)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=for-the-badge)
![CORS](https://img.shields.io/badge/CORS-FF6F00?logo=javascript&logoColor=fff&style=for-the-badge)
![Morgan](https://img.shields.io/badge/Morgan-333333?logo=npm&logoColor=fff&style=for-the-badge)

---

## ⚙️ Requisitos para instalar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/LVVALENTINOVAZQUEZ/ProyectoM2.git

2. **instalar dependencias**
   ```bash
   npm install

3. **Configurar variable de entorno en un archivo .env (ejemplo):**

   MONGO_URI=mongodb://localhost:27017/proyectoM2
  PORT=3001  


## Front
1. **Ir a la carpeta Front**

2. **Instalar dependencias**
```bash
npm install
```

## ▶️ Cómo ejecutar localmente

**Backend**

1. **Iniciar el servidor con nodemon**
   ```bash
   npm start
   ```
2. **El backend quedará corriendo en:**
```bash
http://localhost:3001
```

   **Front**
1. **Levantar el servidor de desarrollo**
    ```bash
     npm start
    ```
2. **Modo desarrollo con build automático**
   ```bash
   npm run dev
   ```
## 📌 Notas adicionales
- El backend expone endpoints REST para manejar películas y conectarse a MongoDB.
- El frontend consume la API usando Axios y se sirve con live-server.
- Se utiliza Webpack para empaquetar los recursos del frontend.
- El proyecto puede extenderse con autenticación de usuarios, favoritos o integración con APIs externas de películas.
