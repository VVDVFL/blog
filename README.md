Node.js sample project(2) to get hands on experience 

Planned tasks: BLOG
    1. User Management 
        Get User details based on payload || Authorized
        Create user if not exist || Authorized
        User login || Not Authorized
    2. Article Management
        Post Article || Authorized
        View Article || Authorized OR Not Authorized
        Add article to favorite || Authorized
        Add comment to artical || Authorized
    3. JWT Autorization    

Dependencies Used(@highlevel) : For more info have a look at package.json
1. Passport.js
2. Passport-local
3. Express.js
4. Express-jwt.js
5. Mongoos
6. Mmongoos validator
7. JSON web tokens
8. Method override
9. Express-Session
10. CORS

Steps to start app
1. npm install - will download all node modules
2. in ROOT/index.js at line 31 update connection string 
3. npm start will start server at 3001(can update in ROOT/index.js at line 23)
4. On success of above steps browse http://localhost:3001 in your browser

NOTE : collections will be automatically created ;-)