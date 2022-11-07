# BackendPeliculas

Parte backend para una aplicación tipo videoclub
### Tecnologías usadas:
- Express
- MySQL
- JavaScript
- Node
- Sequelize

### Resumen del proyecto
El proyecto consta de 6 tablas:movies,series,articles,orders,users y rols. Además,algunos de los endpoints solo pueden ser ejecutados por usuarios con permisos para ello. Cualquiera puede sacar listados de peliculas y series,ya sea por ID,por titulo o por genero,además se pueden obtener las series que vayan a tener un pase en teatros o cines y las series que se vayan a emitir en los próximos 7 dias.En la parte de usuarios podemos registrar usuarios,logearnos,borrar usuarios (solo puede realizarlo el administrador) y editar nuestro usuario. En cuanto a los pedidos,un pedido solo contiene un único articulo,y un usuario puede obtener una lista de sus pedidos,así como generarlos.
## Diagrama Entidad Relación

## Endpoints
### Movies
**GET /movies/byId/:id**
Recibe el id por parametro en la url y muestra la pelicula.
**GET /movies/byTitle/:id**
Recibe el titulo por parametro en la url y muestra la pelicula.
**GET /movies/byGenre/:id**
Recibe el genero por parametro en la url y muestra la pelicula.
**GET /movies/topRated**
Obtiene un listado con las peliculas mejor valoradas (rating==5).

### Series
**GET /series/byId/:id**
Recibe el id por parametro en la url y muestra la serie
**GET /series/byTitle/:title**
Recibe el titulo por parametro en la url y muestra la serie
**GET /series/byGenre/:genre**
Recibe el genero por parametro en la url y muestra la serie
**GET /series/topRated**
Obtiene un listado con las series mejor valoradas (rating==5)

### Auth
**POST /auth/register**
Recibe email y contraseña a través del body y crea un usuario si el email no está ya registrado hasheando la contraseña.
**POST /auth/login**
Recibe email y contraseña a través del body,busca un usuario con ese correo y si lo encuentra hashea la contraseña y la compara con la de la base de datos,en caso de ser correcta,crea y devuelve un json web token.

### Orders
**GET orders/getUserOrders**
Devuelve los pedidos del usuario.Para que este endpoint funcione necesitaremos haber pasado antes por /auth/login, que nos habrá devuelto un json web token que deberemos añadir a la cabecera "Authorization" de las peticiones de la siguiente forma:
![tempsnip](https://user-images.githubusercontent.com/50781684/200200244-c177a43b-6ab5-42b5-ba2a-37527b47e9b3.png)
**GET orders/getAll**
Devuelve todos los pedidos de la aplicación,es necesario loggearse antes con un usuario con el rol de administrador y pasar el token por la cabecera

### Users
**Los endpoint de users solo pueden ser realizados por usuarios loggeados.**
**GET users/get**
Recibe el token por la cabecera y muestra los datos del usuario.
**DELETE users/delete**
Recibe un parametro email a través del body y borra al usuario correspondiente,solo puede realizarlo un usuario con rol de administrador.
**PUT users/update**
Recibe el token del usuario a modificar por la cabecera y la información a modificar por el body y actualiza la información del usuario.

### Instrucciones de uso
Descargar el proyecto y ejecutar el comando "npm i" para descargar las dependencias. La api se conecta con una base de datos creada en railway,en caso de querer usar una base de datos local el proyecto tiene incluidas migraciones y seeders,que se ejecutan con los siguientes comandos:
- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all

El usuario con el rol de administrador es creado en los seeders y es necesario para probar algunos de los endpoints, sus credenciales son las siguientes:
        email: "admin@email.com",
        password:"root"

### Dependencias del proyecto
- express
- jsonwebtoken
- mysql
- mysql2
- nodemon
- sequelize
- sequelize-cli
- dotenv

## Variables de acceso a la base de datos
- username:root
- password:vsxtYjwgmBMXcc6aYANT
- database:railway
- host:containers-us-west-41.railway.app
- port:6989