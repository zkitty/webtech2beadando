#!/bin/bash
docker volume create --name=mongodata
docker run -d -p 27017:27017 --name mongodb -v mongodata:/data/db mongo

chmod +r *.json

docker cp ./shutters.json mongodb:/tmp/shutters.json
docker exec mongodb mongoimport --db shutters --collection shutters --file ./tmp/shutters.json --jsonArray
