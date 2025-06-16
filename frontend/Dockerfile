# Use slim instead of alpine to avoid musl-related native binary issues
FROM node:20.17.0-slim

WORKDIR /app

# Install dependencies required by some native modules
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
# ENV ROLLUP_NO_BINARY=true
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]
