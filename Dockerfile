# Instalar node version 14
FROM node:14 AS builder

# Crear una nueva carpeta par alojar nuestro aplicacion web
WORKDIR /opt/front

# Copia el directorio actual dentro de la carpeta actual
COPY . .

# Ejecutar el comando npm install para instalar dependencias
RUN npm install

# Ejecutar el comando para compilar la aplicacion
RUN npm run build

# Instalar servidor nginx
FROM nginx

# Crear una nueva carpeta par alojar nuestro servidor web
WORKDIR /var/www/front

# Copiar compilador en nuestro servidor
COPY --from=builder /opt/front/dist/Frontend .

# Copiar configuracion de nginx
COPY nginx.conf /etc/nginx/