<h1>Express Rest API Tutorial From Scratch</h1>
<p>Simple Express Rest API Tutorial from beginner to advanced.</p>

<h2>Materials :</h2>
<ul>
  <li>Basic Express and REST API
    <ul>
      <li>Installing</li>
      <li>Using .env file to save configurations</li>
      <li>Running Express Project</li>
      <li>Routing</li>
      <li>HTTP Method (GET, POST, PUT, DELETE)</li>
      <li>MVC Architecture</li>
      <li>Request Validation using <pre>express-validator</pre></li>
    </ul>
  </li>
  <li>Database
    <ul>
      <li>Setup mysql database</li>
      <li>Using <pre>sequielize</pre> and <pre>mysql2</pre> library</li>
      <li>Create database instance</li>
      <li>Create database schema</li>
      <li>Create database seeders</li>
    </ul>
  </li>
  <li>Authentication
    <ul>
      <li>JWT Authentication</li>
      <li>Using <pre>jsonwebtoken</pre> library</li>
      <li>Using <pre>express-jwt</pre> library</li>
      <li>Password hasing using <pre>bcrypt</pre> library</li>
      <li>User login and register</li>
      <li>Securing route</li>
    </ul>
  </li>
  <li>CRUD
    <ul>
      <li>Validating request</li>
      <li>Creating data</li>
      <li>Updating data</li>
      <li>Showing data</li>
      <li>Deleting data</li>
      <li>Securing route</li>
    </ul>
  </li>
</ul>

<h2>Requirements :</h2>
1. NodeJS
2. Nodemon
3. NPM

<h2>STEPS :</h2>
<h3>Installations :</h3>
1. npx express-generator express-rest-api --no-view
2. npm install
3. change package.json add npm run dev. nodemon app.js
4. npm install dotenv --save. add require('dotenv').config() to app.js
5. write .env file
6. Add port listener to app.js

<h3>Database :</h3>
1. Database
2. npm install --save sequelize
3. npm install --save mysql2
4. create database/index.js
5. create database/schemas
6. create database/seeders

<h3>Authentication :</h3>
1. Write auth route
2. npm install jsonwebtoken --save
3. npm install express-jwt --save
4. write jwt & hasher lib
5. npm install express-validator --save
6. write login and register validator
7. write AuthController
8. write controllers/utils/authenticate.js

<h3>Post CRUD :</h3>
1. Write post route
2. Write post controller
3. write controllers/utils/validate.js
4. continue working on post controllers
