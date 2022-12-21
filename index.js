const express = require("express");
const Joi = require("joi");


const app = express();
app.use(express.json());
const port = process.env.PORT ?? 3000;

const courses = [
    {
        id: 1,
        name: "Hello node.js"
    },
    {
        id: 2,
        name: "Hello Java"
    },
    {
        id: 3,
        name: "Hello Javascript"
    }
];

app.get('/api/course', (req, res) => {
    res.send(courses);
});

app.post('/api/course', (req, res) => {
    const { name } = req.body;
    const course = {
        id: courses.length + 1,
        name
    }

    courses.push(course);

    res.send(course);
});

app.put('/api/course', (req, res) => {
    const { id, name } = req.body;
    let course = courses.find((course) => course.id == id);

    // Add name validation using JOI library
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().min(3).required(),
    });

    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }

    console.log(`validationResult :${JSON.stringify(validationResult.error)}`);

    course.name = name;

    // courses.push(course);

    res.send(course);
});

app.get('/api/course/:id', (req, res) => {
    const { id } = req.params;
    const course = courses.find((course) => course.id == id);

    if (!course) {
        return res.status(404).send(`Course not found. id:${id}`);
    }

    res.send(course);
});

app.delete('/api/course/:id', (req, res) => {
    const { id } = req.params;
    const course = courses.find((course) => course.id == id);

    if (!course) {
        return res.status(404).send(`Course not found. id:${id}`);
    }

    res.send(courses.splice(id, 1));
});

app.get('/', (req, res) => {
    res.send("Hello node.js + Express + Git Codespace!");
});


app.listen(port, () => console.log(`App started on port:: ${port}`));