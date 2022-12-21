# nodex-express-course
## _Node.js with Express server sample application._

```sh
# Start the app
node start

# Start in dev mode
npm run dev
```

### TBD
Use https://www.npmjs.com/package/swagger-ui-express


```sh
### Get All Courses
GET http://localhost:5000/api/course


### Get A Course
GET http://localhost:5000/api/course/4

### Delete A Course
DELETE http://localhost:5000/api/course/2

### Create A Course
POST http://localhost:5000/api/course/
Content-Type:  application/json

{
    "name":"Hello AWS!"
}

### Update A Course
PUT http://localhost:5000/api/course/
Content-Type:  application/json

{
    "id":1,
    "name":"H!"
}
```