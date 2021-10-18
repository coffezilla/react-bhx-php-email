# This image run webpack sample and node for development
# all files are running inside the container even the node_modules
#
# TIP 1: the node_modules folder will be empty in the local folder
# TIP 2: if you want to install new dependencies like: npm install <new_dep>, you have to recreate the image
# TIP 2: run bash from the the node image:
# $ docker run -it --entrypoint /bin/bash <image_name>

# FROM node:14.18.1-buster
FROM node:lts-alpine3.14

# add `/app/node_modules/.bin` to the $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY /react-app/package.json /app/package.json

WORKDIR /app

RUN npm install
RUN npm install -g react-scripts

CMD echo 'Image Builded - docker-react-backend'
