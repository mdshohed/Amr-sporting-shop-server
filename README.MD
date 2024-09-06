
### How to run this project

- first of all clone this project from github. Then go to project path and install npm package.

```
git clone 
cd sporting-goods-server
npm install
```

- Next, You will need to setup .env file where you have to setup this process config file: 

```
NODE_ENV=development 
PORT=5000
DATABASE_URL=database url
BCRYPT_SALT_ROUNDS=10
DEFAULT_PASS=usingYourPassword
JWT_ACCESS_SECRET=yourSecretKey
JWT_REFRESH_SECRET=yourSecretKey
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=365d
```

- To Start this project. you have run npm command: `npm run start:dev`


### Link: 
<div >

- Live Deployment Link (Server): <a href="" target="_blank"></a>

- GitHub Repository Links (Server): <a href="" target="_blank"></a>

- Project Overview Video:  <a href="" target="_blank"></a>

</div>



### Project Description: Bike Rental Reservation System Backend

This a bike rental system where users could easily rent bikes online. User would be able to handle user registrations, bike availability, and booking management efficiently.

**Models:**

1. **User Model**
2. ****
3. ****

### Technology Stack:

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **ODM & Validation Library**: Zod, Mongoose for MongoDB



## npm package
- dotenv
- cors(dependencies/devDependencies)
- express(dependencies/devDependencies)
- mongoose
- cookie-parser(dependencies/devDependencies)
- Zod
- eslint
- prettier
- http-status
- jsonwebtoken(dependencies/devDependencies)
- bcrypt(dependencies/devDependencies)


