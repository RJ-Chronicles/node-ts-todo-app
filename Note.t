To setup node typescript
1) npm --init -y   initialize package.json file
2) npm tsc --init  initialize the project as typescript project
3) enable     "moduleResolution": "node", in tsconfig.json file
4) enable     "outDir": "./dist", where our complied js code will be located
5) enable     "rootDir": "./src",  where our ts code will be located
6) npm install --save-dev @types/node
7) npm install --save-dev @types/node => express specific types
8) add start script     "start": "nodemon dist/app.js"
9) create route folder with import { Router } from "express";const router = Router();
10) create controller folder with different controller files
11) create  model folder for req/res blue print
12) type casting will help to understan the what type of value is coming through request body :     const {text} = (req.body as {text: string});
13) tsc -w  " to enable watchmode"

tsc -w : typescript watch model
nmp start : to run application
