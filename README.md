# Develup

The Official Develup Repo using [Meteor](https://www.meteor.com/) and [WeKan](https://wekan.github.io/)

# Getting Started

Install the following:

- Meteor 2.11.0
- MongoDB 6.0.5
- Mongosh

Install dependencies to get rid off errors

```
npm i --save-dev @types/mocha meteor-typings @types/meteor tailwindcss postcss autoprefixer postcss-load-config
```

# Running Docker Image

In the future, we will dockerize this app to increase scalability.

```
docker run -d --restart=always --name wekan-db mongo:5

docker run -d --restart=always --name wekan --link "wekan-db:db" -e "WITH_API=true" -e "MONGO_URL=mongodb://wekan-db:27017/wekan" -e "ROOT_URL=http://192.168.1.200:2000" -p 2000:8080 wekanteam/wekan:v5.41
```

To start an interactive shell:

```
docker container exec --tty --interactive wekan ./bin/sh
```

- TODO
  - Create Dockerfile
  - Publish to Dockerhub and Quay
  - Change the image used in the above commands
