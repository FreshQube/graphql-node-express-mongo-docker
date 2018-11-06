# The latest nodejs image to build
FROM node:latest

#create & set a working directory
RUN mkdir -p /usr/src/graphql-node-api
WORKDIR /usr/src/graphql-node-api

#copy package.json & install dependencies
COPY package.json /usr/src/graphql-node-api/
RUN npm install

#copy source files to working directory
COPY . /usr/src/graphql-node-api

# Expose the port for access
EXPOSE 3333

# start the nodejs server to run the app
CMD npm start