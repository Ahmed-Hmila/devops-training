# Stage 1: Build the Angular application
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY./ package.json ./package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the entire Angular project to the container
COPY . .

# Build the Angular application
RUN npm run build

# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine

# Copy the built Angular app from the previous stage to Nginx's default html directory
COPY --from=build /app/dist/university-management /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./src/assets/config.json /usr/share/nginx/html/assets/config.json


# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
