FROM node:20

WORKDIR /app

# Remove this and try
COPY package*.json ./   

# Remove this and try
RUN npm install

COPY . .

# Remove this and try
EXPOSE 3000

CMD ["node", "app.js"]