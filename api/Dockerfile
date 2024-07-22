# Fase de desarrollo
FROM node:22-alpine AS development
WORKDIR /app

# Copia los archivos package.json para el API
COPY package*.json ./

# Instala dependencias para el API
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto necesario
EXPOSE 3001

# Comando para ejecutar el API en desarrollo
CMD ["npm", "start"]

# Fase de producción
FROM node:22-slim AS production
WORKDIR /app

# Copia los archivos package.json para el API
COPY package*.json ./

# Instala dependencias para el API (solo producción)
RUN npm install --only=production

# Copia el resto de los archivos del proyecto
COPY . .

# Configura el entorno de producción
EXPOSE 3001

# Comando para ejecutar el API en producción
CMD ["npm", "start"]
