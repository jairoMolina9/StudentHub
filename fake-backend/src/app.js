const express = require('express')
const app = express()
const faker = require('faker')

function createFakeUser(userID) {
    let user = {
        id: userID,
        name: faker.name.findName(),
        age: faker.random.number({min:18, max:40}),

        major: faker.random.arrayElement(['Computer Science', 'Computer Information Systems', 'Engineering', 'Mathematics']),
        school: faker.random.arrayElement(['BMCC', 'BCC', 'Guttman CC', 'Hostos CC', 'KCC', 'LaGuardia CC', 'Baruch College', 'Brooklyn College', 'College of Staten Island', 'Hunter College', ' John Jay College Of Criminal Justice', 'Lehamn College', 'Medgars Evers College', 'New York City College Of Technology', 'Queens College', 'The City College of New York', 'York College']),
        home: [faker.address.longitude(), faker.address.latitude()],
        img: faker.image.avatar(),
interest: faker.random.arrayElement(['Programming',  'Theater', 'Playing guitar', 'Business', 'Mathematics' ]),
        classes: [
        {
            name: faker.random.arrayElement(['JPN20200', 'ENG30202', 'MAT2932', 'CSC400', 'SPN100']),
            section: faker.random.arrayElement(['01','02','03','04','05']),
            times: [
            {
                dayOfWeek: faker.date.weekday(),
                timeStart: faker.date.future(),
                timeEnd: faker.date.future()
            }
            ]
        }
        ]
    }

    return user;
}

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


let fakeUsers = []

for(let i = 0; i < 30; i++) {
    fakeUsers.push(createFakeUser(i))
}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', function(req, res) {
    res.send(JSON.stringify(fakeUsers));
});

app.get('/user/:id', function(req, res) {
    res.send(JSON.stringify(fakeUsers[req.params.id]));
});


app.listen(3005, () => console.log('Example app listening on port 3005!'))
