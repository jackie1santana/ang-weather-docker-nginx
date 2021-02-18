FROM node:14.15.4-buster

# RUN npm install -g http-server

WORKDIR /client

COPY package*.json /client/


RUN npm install
RUN npm install -g @angular/cli


COPY . /client/

EXPOSE 4200

# CMD ["httpserver", "dist"]
CMD ["ng", "serve", "--host=0.0.0.0"]