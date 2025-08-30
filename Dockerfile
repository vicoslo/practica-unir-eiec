# Usa una imagen base de Node.js, preferiblemente una versión LTS (Long Term Support).
FROM node:18-alpine

# Define el directorio de trabajo dentro del contenedor.
# Esto asegura que los comandos 'COPY' y 'RUN' se ejecuten en este directorio.
WORKDIR /usr/src/app

# Copia los archivos de manifiesto de dependencias.
# Esto permite que Docker use el caché de capas si estos archivos no han cambiado.
COPY package*.json ./

# Instala las dependencias de la aplicación.
RUN npm install

# Copia el resto del código de la aplicación al directorio de trabajo.
COPY . .

# Expone el puerto que la aplicación Node.js usa.
EXPOSE 3000

# Define el comando que se ejecuta cuando el contenedor se inicia.
CMD [ "node", "app.js" ]
