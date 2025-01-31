FROM node:16
WORKDIR /app
RUN ls -la /
COPY package.json package-lock.json ./
RUN ls -la /app
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "src/server.js"]
