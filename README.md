requirements :
1. NodeJS
2. Nodemon
3. NPM

Step :
Intstallations :
1. npx express-generator express-rest-api --no-view
2. npm install
3. change package.json add npm run dev. nodemon app.js
4. npm install dotenv --save. add require('dotenv').config() to app.js
5. Add port listener to app.js

Database :
1. Database
2. npm install --save sequelize
3. npm install --save mysql2
4. npm install --save sequelize-cli
5. npx sequelize-cli init
6. .sequelizerc
7. config/config.js
8. npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
9. npx sequelize-cli model:generate --name Post --attributes title:string,content:text,thumbnail:string
10. npx sequelize-cli db:migrate
11. npx sequelize-cli seed:generate --name UserSeeder
12. npx sequelize-cli db:seed:all



https://sequelize.org/v5/manual/getting-started.html