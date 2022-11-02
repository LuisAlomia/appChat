# Chat API

Esta es una **API Rest** desarrollada en **NODE JS**, que permite la creación actualización y eliminación de usuarios, mensajes y conversaciones. Además tiene **rutas protegidas, roles, Hash de contraseñas y token de sesión.** De esta manera una vez el usuario crea una cuenta, este podrá crear diferentes conversaciones con uno o multiples participantes, tambien podra ver una conversacion, un participante de esta o mensaje en especifico.

### Tecnologías principales

- **express** (Es una infraestructura web que nos permite la creación de **APIS** sobre el entorno de desarrollo de **NODE JS**)
- **bcryp** (Permite encriptar las contraseñas )
- **dotenv** (Nos permite manejar las variables de entorno)
- **cors** (Permite el aseso desde diferentes servidores)
- **passport**
- **passport-jwt** ((Nos permite validar el token ))
- **sequelize** (Es un **ORM** de base de datos relacionales para este proyecto usamos **Postgres**)
- **uuid** (Nos brida un id aleatorio de formato especifico)

## Como iniciar el proyecto

- Clonar el repositorio **(git clone https://github.com/LuisAlomia/appChat.git)**
- Instalar las dependencias **(npm install)**
- Crear archivo **(.env)** con las variables de entorno
- Crear la base de datos en Postgres
- Iniciar el servidor **(npm run start)**
- Probar las rutas
- O entrar en modo desarrollo con **(npm run dev)**
  **Nota :** si inicias el modo desarrollo antes se recomienda instalar nodemon **(npm install nodemon -D)**

## Variables de entorno (.env)

Crea el archivo **(.env)** en la raíz del proyecto e ingresa las siguientes variables
PORT = 9000 (es el Puerto local del servidor
DB_USERNAME = user name data base
DB_PASSWORD = password data base
DB_HOST = localhost
DB_DATABASE = name data base
JWT_SECRET = secret word
**Nota:** Recuerda revisar el archive **(.env.example)**
