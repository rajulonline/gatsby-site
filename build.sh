#!/bin/bash
cd server && npm install
node app
cd ../ && npm install
npm start
