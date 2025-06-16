# backend/Dockerfile

FROM node:18

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy rest of the backend files
COPY . .

EXPOSE 7000

CMD ["npm", "start"]
