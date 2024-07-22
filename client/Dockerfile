# Fase de desarrollo
FROM node:22-alpine AS development
WORKDIR /app

# Copia los archivos package.json para el Cliente
COPY package*.json ./

# Instala dependencias para el Cliente
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto necesario
EXPOSE 5173

# Comando para ejecutar el Cliente en desarrollo
CMD ["npm", "run", "dev"]

# Fase de producción
FROM node:22-slim AS production
WORKDIR /app

# Copia los archivos package.json para el Cliente
COPY package*.json ./

# Instala dependencias para el Cliente (solo producción)
RUN npm install --only=production

# Copia el resto de los archivos del proyecto
COPY . .

# Construye el frontend
RUN npm run build

# Expone el puerto necesario (si es necesario)
EXPOSE 5173

# Comando para servir el Cliente en producción
CMD ["npx", "serve", "build"]
